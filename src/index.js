const { jsConfig } = require("./javascript")
const { tsConfig } = require("./typescript")
const { coffeConfig } = require("./coffeescript")
const { jsonOverides } = require("./json")
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
  overrides: [tsConfig, coffeConfig, jsonOverides, yamlConfig],
  settings: {
    ...pluginImportSettings,
  },
}
