import { coffeeConfig } from "./coffeescript.cjs"

export const csonConfig = {
  ...coffeeConfig,
  files: ["**/*.cson"],
  rules: {
    // cson expressions are exported by default
    "no-unused-expressions": "off",
  },
}
