import { jsConfig } from "./javascript.cjs"
import { tsConfig } from "./typescript.cjs"
import { coffeeConfig } from "./coffeescript.cjs"
import { jsonConfig } from "./json.cjs"
import { csonConfig } from "./cson.cjs"
import { yamlConfig } from "./yaml.cjs"
import { htmlConfig } from "./html.cjs"
import { pluginImportSettings } from "./plugin-import-rules.cjs"
import semverLt from "semver/functions/lt"
import { getEslintVersion } from "./eslint-version.cjs"

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
