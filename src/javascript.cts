import { eslintRulesExtra } from "./official-eslint-rules.cjs"
import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra } from "./plugin-import-rules.cjs"
import type { Linter } from "eslint"
import * as eslintBabelParser from "@babel/eslint-parser"
import * as nodePlugin from "eslint-plugin-node"
import * as importPlugin from "eslint-plugin-import"
import * as onlyWarnPlugin from "eslint-plugin-only-warn"
import * as optimizeRegexPlugin from "eslint-plugin-optimize-regex"
// import * as prettierPlugin from "eslint-plugin-prettier"

import js from "@eslint/js"

export const jsConfig: Linter.FlatConfig = {
  ...js.configs.recommended,
  ...optimizeRegexPlugin.configs!.all,
  // ...prettierPlugin.configs!.all,
  files: ["*.js", "*.mjs", "*.cjs", "*.jsx", "*.flow"],
  languageOptions: {
    parser: eslintBabelParser,
    parserOptions: {
      requireConfigFile: false,
      ecmaFeatures: {
        jsx: true,
      },
      babelOptions: {
        plugins: ["@babel/plugin-syntax-flow", "@babel/plugin-syntax-jsx"],
      },
      ecmaVersion: "latest" as const,
      sourceType: "module" as const,
    },
    globals: {
      atom: "readonly",
    },
  },
  plugins: {
    node: nodePlugin,
    import: importPlugin,
    "only-warn": onlyWarnPlugin,
  },
  rules: {
    ...eslintRulesExtra,
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
    ...importPlugin.configs.recommended.rules,
  },
}
