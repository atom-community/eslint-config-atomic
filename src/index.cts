import { defineConfig } from "@eslint/config-helpers"
import { jsConfig } from "./javascript.cjs"
import { tsConfigs } from "./typescript.cjs"
import { jsonConfig } from "./json.cjs"
// import { yamlConfig } from "./yaml.cjs"
// import pluginOptimizeRegex from "eslint-plugin-optimize-regex"
import semverMajor from "semver/functions/major"
import { getEslintVersion } from "./eslint-version.cjs"
import { astroConfig } from "./astro.cjs"
import type { Linter } from "eslint"
import onlyWarnPlugin from "eslint-plugin-only-warn"
import { htmlConfig } from "./html.cjs"

const eslintMajor = semverMajor(getEslintVersion())

function maybeAddCoffeeScript(): Linter.Config[] {
  try {
    // check if the eslint version is < 8 and if coffee installed
    if (eslintMajor < 8 && require.resolve("eslint-plugin-coffee")) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const coffeeConfig = require("./coffee.cjs").coffeeConfig
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const csonConfig = require("./cson.cjs").csonConfig
      return [coffeeConfig, csonConfig]
    }
  } catch (_err) {
    // optional plugin
  }
  return []
}

const config = defineConfig([
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
