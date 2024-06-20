import type { Linter } from "eslint"
import yamlPlugin from "eslint-plugin-yaml"

export const yamlConfig: Linter.FlatConfig<Linter.RulesRecord> = yamlPlugin.configs.recommended
