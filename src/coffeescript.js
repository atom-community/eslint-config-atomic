const { pluginNodeRules } = require("./plugin-node-rules")
const { pluginImportRulesExtra } = require("./plugin-import-rules")

exports.coffeConfig = {
  // CoffeeScript and CSON files
  files: ["**/*.coffee", "**/*.cson"],
  parser: "eslint-plugin-coffee",
  plugins: ["coffee", "node", "only-warn"],
  extends: ["plugin:coffee/eslint-recommended", "plugin:optimize-regex/all", "plugin:coffee/prettier"],
  rules: {
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
}
