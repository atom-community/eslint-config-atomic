import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra } from "./plugin-import-rules.cjs"
import type { Linter } from "eslint"
import * as eslintPluginCoffee from "eslint-plugin-coffee"
import * as onlyWarnPlugin from "eslint-plugin-only-warn"
import * as nodePlugin from "eslint-plugin-node"
import * as coffeeParser from "eslint-plugin-coffee/parser"

export const coffeeConfig: Linter.FlatConfig<Linter.RulesRecord> = {
  // CoffeeScript files
  ...eslintPluginCoffee.configs!.recommended,
  ...eslintPluginCoffee.configs!.prettier,
  files: ["**/*.coffee"],
  languageOptions: {
    parser: coffeeParser,
  },
  plugins: {
    coffee: eslintPluginCoffee,
    node: nodePlugin,
    "only-warn": onlyWarnPlugin,
  },
  rules: {
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
}
