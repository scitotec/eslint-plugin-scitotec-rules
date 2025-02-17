/**
 * @fileoverview ESLint rules used by Scitotec
 * @author Robert Worgul
 */
"use strict";

import fs from "fs";
import splitImports from "./rules/split-imports.js";

const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


const plugin = {
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    configs: {},
    rules: {
        "split-imports": splitImports,
    },
    processors: {},
};

Object.assign(plugin.configs, {
    recommended: [{
        plugins: {
            "@scitotec": plugin,
        },
        rules: {
            "@scitotec/split-imports": "warn",
        },
    }]
});

export default plugin;
