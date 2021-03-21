const { coffeeConfig } = require("./coffeescript")

exports.csonConfig = {
  ...coffeeConfig,
  files: ["**/*.cson"],
  rules: {
    // cson expressions are exported by default
    "no-unused-expressions": "off",
  },
}
