[![npm version](https://img.shields.io/npm/v/@scitotec/eslint-plugin-rules.svg)](https://www.npmjs.com/package/@scitotec/eslint-plugin-rules)
[![license](https://img.shields.io/npm/l/@scitotec/eslint-plugin-rules.svg)](./LICENSE)

# @scitotec/eslint-plugin-rules

A plugin providing custom ESLint rules made by [Scitotec GmbH](https://scitotec.de).


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@scitotec/eslint-plugin-rules`:

```
$ npm install @scitotec/eslint-plugin-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@scitotec/eslint-plugin-rules` globally.

## Usage

Add `@scitotec/rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@scitotec/rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@scitotec/rules/split-imports": [ "error" ]
    }
}
```

## Supported Rules

* split-imports: Require an independent import statement per module.
