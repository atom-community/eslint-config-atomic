import { pluginNodeRules } from "./plugin-node-rules.js"
import { pluginImportRulesExtra } from "./plugin-import-rules.js"

export const coffeeConfig = {
  // CoffeeScript files
  files: ["**/*.coffee"],
  parser: "eslint-plugin-coffee",
  plugins: ["coffee", "node", "only-warn"],
  extends: ["plugin:coffee/eslint-recommended", "plugin:optimize-regex/all", "plugin:coffee/prettier"],
  rules: {
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
}
