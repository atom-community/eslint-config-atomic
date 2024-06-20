import type { Linter } from "eslint"
import { coffeeConfig } from "./coffeescript.cjs"

export const csonConfig: Linter.FlatConfig<Linter.RulesRecord> = {
  ...coffeeConfig,
  files: ["**/*.cson"],
  rules: {
    // cson expressions are exported by default
    "no-unused-expressions": "off",
  },
}
