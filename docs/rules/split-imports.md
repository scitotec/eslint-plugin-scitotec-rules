# Require an independent import statement per module (split-imports)

Using an independent `import` statement per module will reduce the amount of
merge conflicts caused by import statements. 

Combined module imports - especially in one line - have a huge possibility to
cause merge conflicts, even if the removed or added imports wouldn't conflict
each other.

## Rule Details

This rule requires that every import from a single module exists in an
independent `import` statement.

Example of **incorrect** code for this rule:

```js
/*eslint split-imports: "error"*/

import { merge, find } from 'module';
import something from 'another-module';
```

Example of **correct** code for this rule:

```js
/*eslint split-imports: "error"*/

import { merge } from 'module';
import { find } from 'module';
import something from 'another-module';
```

## Options

There are no options yet.
