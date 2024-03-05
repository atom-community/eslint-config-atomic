import { Linter } from "eslint"

export const yamlConfig: Linter.ConfigOverride<Linter.RulesRecord> = {
  // YAML files
  files: ["*.yaml", "*.yml"],
  plugins: ["yaml", "only-warn"],
  extends: ["plugin:yaml/recommended"],
}
