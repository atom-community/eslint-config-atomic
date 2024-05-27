import type { Linter } from "eslint"
import * as yamlPlugin from "eslint-plugin-yaml"
import * as onlyWarnPlugin from "eslint-plugin-only-warn"

export const yamlConfig: Linter.FlatConfig<Linter.RulesRecord> = {
  // YAML files
  // ...yamlPlugin.configs.recommended,
  files: ["*.yaml", "*.yml"],
  plugins: {
    yaml: yamlPlugin,
    "only-warn": onlyWarnPlugin,
  },
}
