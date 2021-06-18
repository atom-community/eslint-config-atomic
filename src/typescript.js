const { eslintRulesExtra } = require("./official-eslint-rules")
const { pluginImportRulesExtra, pluginImportTypeScriptRulesExtra } = require("./plugin-import-rules")
const { pluginNodeRules } = require("./plugin-node-rules")

const pluginTypeScriptRulesExtra = {
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/camelcase": "off",
  "@typescript-eslint/no-use-before-define": "off",
  "@typescript-eslint/member-delimiter-style": "off",
  "@typescript-eslint/no-inferrable-types": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-parameter-properties": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "error",
  // "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-argument": "error",
  // "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-includes": "error",
  // "@typescript-eslint/prefer-literal-enum-member": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-reduce-type-parameter": "error",
  // "@typescript-eslint/prefer-string-starts-ends-with": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/strict-boolean-expressions": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "warn",
}

exports.tsConfig = {
  // TypeScript files
  files: ["**/*.ts", "**/*.tsx"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./**/tsconfig.json", "!./**/node_modules/**/tsconfig.json"],
    createDefaultProgram: true, // otherwise Eslint will error if a ts file is not covered by one of the tsconfig.json files
  },
  plugins: ["@typescript-eslint", "node", "import", "only-warn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:optimize-regex/all",
    "plugin:import/recommended",
    "prettier",
  ],
  rules: {
    ...eslintRulesExtra,
    ...pluginTypeScriptRulesExtra,
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
    ...pluginImportTypeScriptRulesExtra,
  },
}
