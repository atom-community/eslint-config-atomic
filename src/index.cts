import { jsConfig } from "./javascript.cjs"
import { tsConfig } from "./typescript.cjs"
import { coffeeConfig } from "./coffeescript.cjs"
import { jsonConfig } from "./json.cjs"
import { csonConfig } from "./cson.cjs"
import { yamlConfig } from "./yaml.cjs"
import { htmlConfig } from "./html.cjs"
import { pluginImportSettings } from "./plugin-import-rules.cjs"
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
      // if so try adding the coffee plugin
      return [coffeeConfig, csonConfig]
    }
  } catch (_err) {
    // optional plugin
  }
  return []
}

const config: Linter.Config = {
  root: true,
  env: {
    atomtest: true,
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    atom: "readonly",
  },
  ignorePatterns: ["node_modules/"],
  ...jsConfig,
  overrides: [tsConfig, jsonConfig, yamlConfig, htmlConfig, astroConfig, ...maybeAddCoffeeScript()],
  settings: {
    ...pluginImportSettings,
  },
}

export default config
