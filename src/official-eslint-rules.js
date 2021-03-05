/** The official Eslint rules that are constructive and not included in recommended.
 * The formatting/stylistic rules are not among these.
 * The rules that might be useful in future are commented.
 */
exports.eslintRulesExtra = {
  // https://eslint.org/docs/rules/#strict-mode
  strict: "error", // require or disallow strict mode directives

  // Source: https://eslint.org/docs/rules/#variables
  // "init-declarations": "error", //require or disallow initialization in variable declarations
  "no-label-var": "error", //disallow labels that share a name with a variable
  // "no-restricted-globals": "error", //disallow specified global variables
  "no-shadow": ["error", { builtinGlobals: true, hoist: "all", allow: [] }], //disallow variable declarations from shadowing variables declared in the outer scope
  // "no-use-before-define": "error", // disallow the use of variables before they are defined

}
