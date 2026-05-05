import json from "@eslint/json"
import type { ESLint } from "eslint"
import { defineConfig } from "eslint/config"

export const jsonConfig = defineConfig([
  // lint JSON files
  {
    files: ["**/*.json"],
    ignores: ["**/package-lock.json"],
    plugins: { json: json as unknown as ESLint.Plugin },
    language: "json/jsonc",
    extends: ["json/recommended"],
    rules: {
      // fails with sourceCode.getAllComments is not a function
      "no-irregular-whitespace": "off",
    },
  },

  // lint JSONC files
  {
    files: ["**/*.jsonc"],
    plugins: { json: json as unknown as ESLint.Plugin },
    language: "json/jsonc",
    extends: ["json/recommended"],
    rules: {
      "no-irregular-whitespace": "off",
    },
  },

  // lint JSON5 files
  {
    files: ["**/*.json5"],
    plugins: { json: json as unknown as ESLint.Plugin },
    language: "json/json5",
    extends: ["json/recommended"],
    rules: {
      "no-irregular-whitespace": "off",
    },
  },
])
