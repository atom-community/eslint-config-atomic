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
}

exports.tsConfig = {
  // TypeScript files
  files: ["**/*.ts", "**/*.tsx"],
  parser: "@typescript-eslint/parser",
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
