import type { Linter } from "eslint"
import { pluginImportAstroRulesExtra } from "./plugin-import-rules.cjs"
import astroPlugin from "eslint-plugin-astro"
import astroParser from "astro-eslint-parser"

export const astroConfig: Linter.Config[] = [
  // astro files
  ...astroPlugin.configs["flat/all"],
  {
    files: ["*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      globals: {
        astroHTML: "readonly",
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...pluginImportAstroRulesExtra,
    },
  },
]
