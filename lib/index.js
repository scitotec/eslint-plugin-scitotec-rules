/**
 * @fileoverview ESLint rules used by Scitotec
 * @author Robert Worgul
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// Import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
