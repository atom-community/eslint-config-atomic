import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra, pluginImportSettings } from "./plugin-import-rules.cjs"
import type { Linter } from "eslint"
// TODO: eslint-plugin-coffee@0.1.15 accesses removed ESLint 9 internals
// (lib/linter/code-path-analysis/debug-helpers) and fails to load under ESLint 9.
// Both are guarded in index.cts (only loaded when eslintVersion < 8) so they don't affect ESLint 9 users.
import * as eslintPluginCoffee from "eslint-plugin-coffee"
import * as nodePlugin from "eslint-plugin-n"
import * as coffeeParser from "eslint-plugin-coffee/parser"

export const coffeeConfig: Linter.Config = {
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
  },
  rules: {
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
  settings: {
    ...pluginImportSettings,
  },
}
