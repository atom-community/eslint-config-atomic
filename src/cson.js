const { coffeeConfig } = require("./coffeescript")

exports.csonConfig = {
  ...coffeeConfig,
  files: ["**/*.cson"],
}
