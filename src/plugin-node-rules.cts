import { Linter } from "eslint"

export const pluginNodeRules: Linter.RulesRecord = {
  "node/no-exports-assign": "error",
  "node/process-exit-as-throw": "error",
  "node/shebang": "error",
  "node/no-deprecated-api": "error",
  "node/prefer-promises/dns": "error",
  "node/prefer-promises/fs": "error",
}
