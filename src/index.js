const { jsConfig } = require("./javascript")
const { tsConfig } = require("./typescript")
const { coffeeConfig } = require("./coffeescript")
const { jsonConfig } = require("./json")
const { csonConfig } = require("./cson")
const { yamlConfig } = require("./yaml")
const { htmlConfig } = require("./html")
const { pluginImportSettings } = require("./plugin-import-rules")

const overrides = [tsConfig, jsonConfig, yamlConfig, htmlConfig]

// add coffee if installed
if (coffeeConfig !== {}) {
  try {
    const found = require.resolve("eslint-plugin-coffee")
    if (found) {
      overrides.push(coffeeConfig, csonConfig)
    }
  } catch (_err) {
    // optional plugin
  }
}

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
  overrides,
  settings: {
    ...pluginImportSettings,
  },
}
