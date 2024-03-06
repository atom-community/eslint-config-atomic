import { Linter } from "eslint"
import { pluginImportAstroRulesExtra } from "./plugin-import-rules.cjs"

export const astroConfig: Linter.ConfigOverride<Linter.RulesRecord> = {
  // astro files
  files: ["*.astro"],
  parser: "astro-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
  },
  plugins: ["astro", "only-warn"],
  extends: ["plugin:astro/recommended"],
  rules: {
    ...pluginImportAstroRulesExtra
  },
  globals: {
    astroHTML: "readonly",
  },
}
