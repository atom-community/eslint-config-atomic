import type { Linter } from "eslint"

export const pluginNodeRules: Linter.RulesRecord = {
  "n/no-exports-assign": "error",
  "n/process-exit-as-throw": "error",
  "n/shebang": "error",
  "n/no-deprecated-api": "error",
  "n/prefer-promises/dns": "error",
  "n/prefer-promises/fs": "error",
}
