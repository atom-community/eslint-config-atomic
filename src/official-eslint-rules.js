/** The official Eslint rules that are constructive and not included in recommended.
 * The formatting/stylistic rules are not among these.
 * The rules that might be useful in future are commented.
 */
exports.eslintRulesExtra = {
  // Source https://eslint.org/docs/rules/#possible-errors
  "no-await-in-loop": "error", // disallow `await` inside of loops
  // "no-console": ["error", { allow: ["warn", "error"] }], // disallow the use of `console`  // console.log is useful in CLI tools
  "no-loss-of-precision": "error", // disallow literal numbers that lose precision
  "no-promise-executor-return": "error", // disallow returning values from Promise executor functions
  "no-template-curly-in-string": "warn", // disallow template literal placeholder syntax in regular strings
  "no-unreachable-loop": "error", // disallow loops with a body that allows only one iteration
  // "no-unsafe-optional-chaining": "error", // disallow use of optional chaining in contexts where the `undefined` value is not allowed   // TODO doesn't work
  "no-useless-backreference": "error", // disallow useless backreferences in regular expressions
  "require-atomic-updates": "error", // disallow assignments that can lead to race conditions due to usage of `await` or `yield`

  // Source https://eslint.org/docs/rules/#best-practices
  // "accessor-pairs": "error", // enforce getter and setter pairs in objects and classes
  "array-callback-return": "error", // enforce `return` statements in callbacks of array methods
  "block-scoped-var": "error", // enforce the use of variables within the scope they are defined
  "class-methods-use-this": "error", // enforce that class methods utilize `this`
  // complexity: "error", // enforce a maximum cyclomatic complexity allowed in a program
  // "consistent-return": "error", // require `return` statements to either always or never specify values
  curly: "error", // enforce consistent brace style for all control statements
  "default-case": "error", // require `default` cases in `switch` statements
  "default-case-last": "error", // enforce default clauses in switch statements to be last
  "default-param-last": "error", // enforce default parameters to be last
  "dot-notation": "error", // enforce dot notation whenever possible
  eqeqeq: "error", // require the use of `===` and `!==`
  "grouped-accessor-pairs": "error", // require grouped accessor pairs in object literals and classes
  // "guard-for-in": "error", // require `for-in` loops to include an `if` statement
  // "no-alert": "error", // disallow the use of `alert`, `confirm`, and `prompt`
  "no-caller": "error", // disallow the use of `arguments.caller` or `arguments.callee`
  "no-constructor-return": "error", // disallow returning value from constructor
  "no-div-regex": "error", // disallow division operators explicitly at the beginning of regular expressions
  "no-empty-function": "error", // disallow empty functions
  "no-eq-null": "error", // disallow `null` comparisons without type-checking operators
  "no-eval": "error", // disallow the use of `eval()`
  "no-extend-native": "error", // disallow extending native types
  "no-extra-bind": "error", // disallow unnecessary calls to `.bind()`
  "no-extra-label": "error", // disallow unnecessary labels
  "no-floating-decimal": "error", // disallow leading or trailing decimal points in numeric literals
  "no-implicit-coercion": "error", // disallow shorthand type conversions
  "no-implicit-globals": "error", // disallow declarations in the global scope // check
  "no-implied-eval": "error", // disallow the use of `eval()`-like methods
  "no-invalid-this": "error", // disallow `this` keywords outside of classes or class-like objects
  "no-iterator": "error", // disallow the use of the `__iterator__` property
  "no-labels": "error", // disallow labeled statements
  "no-lone-blocks": "error", // disallow unnecessary nested blocks
  "no-loop-func": "error", // disallow function declarations that contain unsafe references inside loop statements
  // "no-magic-numbers": "error", // disallow magic numbers
  "no-multi-str": "error", // disallow multiline strings
  "no-new": "error", // disallow `new` operators outside of assignments or comparisons
  "no-new-func": "error", // disallow `new` operators with the `Function` object
  "no-new-wrappers": "error", // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  // "no-nonoctal-decimal-escape": "error", // disallow `\8` and `\9` escape sequences in string literals  // TODO doesn't work
  "no-octal-escape": "error", // disallow octal escape sequences in string literals
  "no-param-reassign": ["error", { props: false }], // disallow reassigning `function` parameters
  "no-proto": "error", // disallow the use of the `__proto__` property
  // "no-restricted-properties": "error", // disallow certain properties on certain objects
  "no-return-assign": "error", // disallow assignment operators in `return` statements
  "no-return-await": "error", // disallow unnecessary `return await`
  "no-script-url": "error", // disallow `javascript:` urls
  "no-self-compare": "error", // disallow comparisons where both sides are exactly the same
  "no-sequences": "error", // disallow comma operators
  "no-throw-literal": "error", // disallow throwing literals as exceptions
  // "no-unmodified-loop-condition": "error", // disallow unmodified loop conditions
  "no-unused-expressions": "error", // disallow unused expressions
  "no-useless-call": "error", // disallow unnecessary calls to `.call()` and `.apply()`
  "no-useless-concat": "error", // disallow unnecessary concatenation of literals or template literals
  // "no-useless-return": "error", // disallow redundant return statements
  // "no-void": "error", // disallow `void` operators
  // "no-warning-comments": "error", // disallow specified warning terms in comments
  // "prefer-named-capture-group": "error", // enforce using named capture group in regular expression
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }], // require using Error objects as Promise rejection reasons
  "prefer-regex-literals": "error", // disallow use of the `RegExp` constructor in favor of regular expression literals
  radix: "error", // enforce the consistent use of the radix argument when using `parseInt()`
  "require-await": "error", // disallow async functions which have no `await` expression  // check
  // "require-unicode-regexp": "error", // enforce the use of `u` flag on RegExp
  // "vars-on-top": "error", // require `var` declarations be placed at the top of their containing scope
  // "wrap-iife": "error", // require parentheses around immediate `function` invocations
  // yoda: "error", // require or disallow "Yoda" conditions

  // https://eslint.org/docs/rules/#strict-mode
  strict: "error", // require or disallow strict mode directives

  // Source: https://eslint.org/docs/rules/#variables
  // "init-declarations": "error", //require or disallow initialization in variable declarations
  "no-label-var": "error", //disallow labels that share a name with a variable
  // "no-restricted-globals": "error", //disallow specified global variables
  "no-shadow": ["error", { builtinGlobals: false, hoist: "all", allow: [] }], //disallow variable declarations from shadowing variables declared in the outer scope
  // TODO Atom's Range, Notification, Window cause this rule to error. In Atom env, these should error once not imported.

  // "no-use-before-define": "error", // disallow the use of variables before they are defined

  // Source: https://eslint.org/docs/rules/#ecmascript-6
  "no-confusing-arrow": "error", // disallow arrow functions where they could be confused with comparisons
  // "no-duplicate-imports": "error", // disallow duplicate module imports // Buggy with Flow and TypeScript
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
