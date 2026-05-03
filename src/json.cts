import type { Linter } from "eslint"
import * as jsonPlugin from "eslint-plugin-json"
// import * as prettierPlugin from "eslint-plugin-prettier"

export const jsonConfig: Linter.Config = {
  // JSON files
  ...jsonPlugin.configs['recommended-with-comments'],
}
