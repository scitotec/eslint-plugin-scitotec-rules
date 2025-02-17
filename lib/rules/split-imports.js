/**
 * @fileoverview Restrict usage of grouped imports.
 * @author Robert Worgul
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Returns the name of the module imported or re-exported.
 * @param {ASTNode} node A node to get.
 * @returns {string} the name of the module, or empty string if no name.
 */
function getValue(node) {
    if (node && node.source && node.source.value) {
        return node.source.value.trim();
    }

    return "";
}

/**
 * Returns a function handling the imports of a given file
 * @param {RuleContext} context The ESLint rule context object.
 *
 * @returns {nodeCallback} A function passed to ESLint to handle the statement.
 */
function handleImports(context) {
    return function (node) {
        const value = getValue(node);
        const sourceCode = context.getSourceCode()

        if (value) {
            if (node.specifiers.length > 1) {
                context.report({
                    node,
                    messageId: 'import',
                    data: {
                        module: value,
                    },
                    fix(fixer) {
                        const start = sourceCode.getFirstToken(node)
                        const end = sourceCode.getLastToken(node)
                        if (sourceCode.commentsExistBetween(start, end)) {
                            // cannot handle import statements containing comments
                            return null
                        }

                        const splitImports = node.specifiers.map(s => {
                            const keyword = node.importKind === 'type' ? 'import type' : 'import';
                            if (s.type == 'ImportSpecifier') {
                                return `${keyword} { ${sourceCode.getText(s)} } from ${sourceCode.getText(node.source)};`
                            } else if (s.type === 'ImportDefaultSpecifier') {
                                return `${keyword} ${sourceCode.getText(s)} from ${sourceCode.getText(node.source)};`
                            } else {
                                return null
                            }
                        })

                        if (splitImports.some(x => x == null)) {
                            // unexpected / yet unhandled import specifiers found
                            return null
                        }



                        return fixer.replaceText(node, splitImports.join('\n'))
                    },
                });
            }
        }
    }
}


export default {
    meta: {
        type: "problem",
        fixable: "code",

        docs: {
            description: "import every specifier in a separate statement",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://github.com/scitotec/eslint-plugin-scitotec-rules/blob/main/docs/rules/split-imports.md"
        },

        schema: [],

        messages: {
            import: "'{{module}}' import should be split up to single imports.",
        }
    },

    create(context) {
        return {
            ImportDeclaration: handleImports(context)
        }
    }
};