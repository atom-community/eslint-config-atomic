import type { Linter } from "eslint"
import { pluginImportAstroRulesExtra } from "./plugin-import-rules.cjs"
import * as astroPlugin from "eslint-plugin-astro"

export const astroConfig: Linter.Config[] = [
  // astro files — flat/all already registers the plugin, parser, parserOptions, and globals
  ...astroPlugin.configs["flat/all"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        astroHTML: "readonly",
      },
    },
    rules: {
      ...pluginImportAstroRulesExtra,
    },
  },
]
