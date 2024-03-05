import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra } from "./plugin-import-rules.cjs"
import { Linter } from "eslint"

export const coffeeConfig: Linter.ConfigOverride<Linter.RulesRecord> = {
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
