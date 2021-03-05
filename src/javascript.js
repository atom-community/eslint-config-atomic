const { pluginNodeRules } = require("./plugin-node-rules")
const { pluginImportRulesExtra } = require("./plugin-import-rules")

exports.jsConfig = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["node", "import", "only-warn"],
  extends: ["eslint:recommended", "plugin:optimize-regex/all", "plugin:import/recommended", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
}
