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

Import `@scitotec/rules` within your `eslint.config.js` configuration file.

```javascript
import pluginScitotec from '@scitotec/eslint-plugin-rules'
```


Then just add the recommended rules to your plugin:

```javascript
export default [
    // ... your other rules...
    ...pluginScitotec.configs.recommended,
]
```

Alternatively, add the plugin and configure the rules yourself:

```javascript
export default [
    // ... your other rules...
    {
        plugins: {
            '@scitotec': pluginScitotec,
        },
        rules: {
            "@scitotec/split-imports": "warn",
        },
    },
]
```

## Supported Rules

* split-imports: Require an independent import statement per module.
