const { jsConfig } = require("./javascript")
const { tsConfig } = require("./typescript")
const { coffeeConfig } = require("./coffeescript")
const { jsonConfig } = require("./json")
const { csonConfig } = require("./cson")
const { yamlConfig } = require("./yaml")
const { pluginImportSettings } = require("./plugin-import-rules")

module.exports = {
  root: true,
  env: {
    atomtest: true,
    es6: true,
    node: true,
    browser: true,
    jasmine: true,
  },
  globals: {
    atom: "readonly",
    measure: "readonly",
  },
  ...jsConfig,
  overrides: [tsConfig, coffeeConfig, jsonConfig, csonConfig, yamlConfig],
  settings: {
    ...pluginImportSettings,
  },
}
