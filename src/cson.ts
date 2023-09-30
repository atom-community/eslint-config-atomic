import { coffeeConfig } from "./coffeescript.js"

export const csonConfig = {
  ...coffeeConfig,
  files: ["**/*.cson"],
  rules: {
    // cson expressions are exported by default
    "no-unused-expressions": "off",
  },
}
