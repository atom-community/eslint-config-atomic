import { defineConfig } from "@eslint/config-helpers"
import { jsConfig } from "./javascript.cjs"
import { tsConfigs } from "./typescript.cjs"
import { jsonConfig } from "./json.cjs"
// import { yamlConfig } from "./yaml.cjs"
import { htmlConfig } from "./html.cjs"
// import pluginOptimizeRegex from "eslint-plugin-optimize-regex"
import semverMajor from "semver/functions/major"
import { getEslintVersion } from "./eslint-version.cjs"
import { astroConfig } from "./astro.cjs"
import type { Linter } from "eslint"
import onlyWarnPlugin from "eslint-plugin-only-warn"

function maybeAddCoffeeScript() {
  try {
    const eslintVersion = semverMajor(getEslintVersion())
    // check if the eslint version is < 8
    // and if coffee installed
    if (eslintVersion < 8 && require.resolve("eslint-plugin-coffee")) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const coffeeConfig = require("./coffee.cjs").coffeeConfig
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const csonConfig = require("./cson.cjs").csonConfig

      // if so try adding the coffee plugin
      return [coffeeConfig, csonConfig]
    }
  } catch (_err) {
    // optional plugin
  }
  return []
}

const config: Linter.Config[] = defineConfig([
  { plugins: { "only-warn": onlyWarnPlugin } },
  ...jsConfig,
  // pluginOptimizeRegex.configs.all,
  ...tsConfigs,
  ...jsonConfig,
  // yamlConfig,
  htmlConfig,
  ...astroConfig,
  ...maybeAddCoffeeScript(),
])

export default config
