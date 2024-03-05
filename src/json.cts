import { Linter } from "eslint"

export const jsonConfig: Linter.ConfigOverride<Linter.RulesRecord> = {
  // JSON files
  files: ["*.json"],
  plugins: ["json"],
  extends: ["plugin:json/recommended", "prettier"],
  rules: {
    "json/*": [
      "error",
      {
        allowComments: true,
      },
    ],
  },
}
