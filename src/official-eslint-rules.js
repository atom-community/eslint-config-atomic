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

  // Source: https://eslint.org/docs/rules/#ecmascript-6
  "no-confusing-arrow": "error", // disallow arrow functions where they could be confused with comparisons
  "no-duplicate-imports": "error", // disallow duplicate module imports
  // "no-restricted-exports": "error", // disallow specified names in exports
  // "no-restricted-imports": "error", // disallow specified modules when loaded by `import`
  "no-useless-computed-key": "error", // disallow unnecessary computed property keys in objects and classes
  "no-useless-constructor": "error", // disallow unnecessary constructors
  "no-useless-rename": "error", // disallow renaming import, export, and destructured assignments to the same name
  "no-var": "error", // require `let` or `const` instead of `var`
  "object-shorthand": "error", // require or disallow method and property shorthand syntax for object literals
  // "prefer-arrow-callback": "error", // require using arrow functions for callbacks
  "prefer-const": "error", // require `const` declarations for variables that are never reassigned after declared
  // "prefer-destructuring": "error", // require destructuring from arrays and/or objects
  "prefer-numeric-literals": "error", // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
  "prefer-rest-params": "error", // require rest parameters instead of `arguments`
  "prefer-spread": "error", // require spread operators instead of `.apply()`
  "prefer-template": "error", // require template literals instead of string concatenation
  "symbol-description": "error", // require symbol descriptions
}
