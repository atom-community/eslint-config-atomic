import { pluginImportAstroRulesExtra } from "./plugin-import-rules.cjs"
import * as astroPlugin from "eslint-plugin-astro"
import { defineConfig } from "@eslint/config-helpers"

export const astroConfig = defineConfig([
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
])
