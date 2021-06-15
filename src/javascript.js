const { eslintRulesExtra } = require("./official-eslint-rules")
const { pluginNodeRules } = require("./plugin-node-rules")
const { pluginImportRulesExtra } = require("./plugin-import-rules")

exports.jsConfig = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      plugins: [
        // enable jsx and flow syntax
        "@babel/plugin-syntax-flow",
        "@babel/plugin-syntax-jsx",
      ],
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["node", "import", "only-warn"],
  extends: ["eslint:recommended", "plugin:optimize-regex/all", "plugin:import/recommended", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    ...eslintRulesExtra,
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
}
