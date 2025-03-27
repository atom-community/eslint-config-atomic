import type { Linter } from "eslint"
import * as jsonPlugin from "eslint-plugin-json"
// import * as prettierPlugin from "eslint-plugin-prettier"

export const jsonConfig: Linter.Config = {
  // JSON files
  ...jsonPlugin.configs!.recommended,
  // ...prettierPlugin.configs!.all,
  files: ["**/*.json"],
  plugins: {
    json: jsonPlugin,
  },
  rules: {
    "json/*": [
      "error",
      {
        allowComments: true,
      },
    ],
  },
}
