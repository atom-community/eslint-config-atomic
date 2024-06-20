import { jsConfig } from "./javascript.cjs"
import { tsConfig } from "./typescript.cjs"
import { jsonConfig } from "./json.cjs"
import { yamlConfig } from "./yaml.cjs"
import { htmlConfig } from "./html.cjs"
// import { pluginImportSettings } from "./plugin-import-rules.cjs"
import pluginOptmizeRegex from "eslint-plugin-optimize-regex"
import semverMajor from "semver/functions/major"
import { getEslintVersion } from "./eslint-version.cjs"
import { astroConfig } from "./astro.cjs"
import type { Linter } from "eslint"

function maybeAddCoffeeScript() {
  try {
    const eslintVersion = semverMajor(getEslintVersion())
    // check if the eslint version is < 8
    // and if coffee installed
    if (eslintVersion < 8 && require.resolve("eslint-plugin-coffee")) {
      const coffeeConfig = require("./coffee.cjs").coffeeConfig
      const csonConfig = require("./cson.cjs").csonConfig

      // if so try adding the coffee plugin
      return [coffeeConfig, csonConfig]
    }
  } catch (_err) {
    // optional plugin
  }
  return []
}

const config: Linter.FlatConfig[] = [
  ...jsConfig,
  pluginOptmizeRegex.configs.all,
  ...tsConfig,
  jsonConfig,
  yamlConfig,
  htmlConfig,
  ...astroConfig,
  ...maybeAddCoffeeScript(),
]

export default config
