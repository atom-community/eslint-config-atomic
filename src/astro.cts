import type { Linter } from "eslint"
import { pluginImportAstroRulesExtra } from "./plugin-import-rules.cjs"
import astroPlugin from "eslint-plugin-astro"
import * as onlyWarnPlugin from "eslint-plugin-only-warn"
import astroParser from "astro-eslint-parser"

export const astroConfig: Linter.FlatConfig<Linter.RulesRecord> = {
  // astro files
  ...astroPlugin.configs.recommended,
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
    "only-warn": onlyWarnPlugin,
  },
  rules: {
    ...pluginImportAstroRulesExtra,
  },
}
