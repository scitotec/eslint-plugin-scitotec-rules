/**
 * @fileoverview Tests for split-imports.
 * @author Robert Worgul
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/split-imports")
const { RuleTester } = require("eslint")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6, sourceType: "module" } });

ruleTester.run("split-imports", rule, {
    valid: [
        `import { merge } from "lodash-es";`,
        `import { merge as foo } from "lodash-es";`,
        `import { merge } from "lodash-es"; import { find } from "lodash-es";`,
        `import "foo";`,
        `import * as Foobar from "async";`,
        `import os from "os";`,
    ],
    invalid: [
        {
            code: `import { merge, find } from "lodash-es";`,
            output: `import { merge } from "lodash-es";\nimport { find } from "lodash-es";`,
            errors: [{ messageId: "import", data: { module: "lodash-es" }, type: "ImportDeclaration" }],
        },
        {
            code: `import _, { merge } from "lodash-es";`,
            output: `import _ from "lodash-es";\nimport { merge } from "lodash-es";`,
            errors: [{ messageId: "import", data: { module: "lodash-es" }, type: "ImportDeclaration" }],
        },
        {
            code: "import {zzzzz, /* comment */ aaaaa} from 'foo.js';",
            output: null, // not fixed due to comment
            errors: [{ messageId: "import", data: { module: "foo.js" }, type: "ImportDeclaration" }],
        },
        {
            code: "import {zzzzz /* comment */, aaaaa} from 'foo.js';",
            output: null, // not fixed due to comment
            errors: [{ messageId: "import", data: { module: "foo.js" }, type: "ImportDeclaration" }],
        },
        {
            code: `import _, { merge as foo, find as bar } from "lodash-es";`,
            output: `import _ from "lodash-es";\nimport { merge as foo } from "lodash-es";\nimport { find as bar } from "lodash-es";`,
            errors: [{ messageId: "import", data: { module: "lodash-es" }, type: "ImportDeclaration" }],
        },
        {
            code: `import type { Foo, Bar } from "baz";`,
            output: `import type { Foo } from "baz";\nimport type { Bar } from "baz";`,
            errors: [{ messageId: "import", data: { module: "baz" }, type: "ImportDeclaration" }],
            parser: '@typescript-eslint/parser',
        },
    ]
});
