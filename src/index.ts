import { jsConfig } from "./javascript"
import { tsConfig } from "./typescript"
import { coffeeConfig } from "./coffeescript"
import { jsonConfig } from "./json"
import { csonConfig } from "./cson"
import { yamlConfig } from "./yaml"
import { htmlConfig } from "./html"
import { pluginImportSettings } from "./plugin-import-rules"
import semverLt from "semver/functions/lt"
import { getEslintVersion } from "./eslint-version"

const overrides = [tsConfig, jsonConfig, yamlConfig, htmlConfig]

// add coffee if installed
try {
  // check if the eslint version is >= 8
  if (semverLt(getEslintVersion(), "8.0.0")) {
    // if so try adding the coffee plugin
    const found = require.resolve("eslint-plugin-coffee")
    if (found) {
      overrides.push(coffeeConfig, csonConfig)
    }
  }
} catch (_err) {
  // optional plugin
}

const config = {
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

export default config
