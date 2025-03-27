import { eslintRulesExtra } from "./official-eslint-rules.cjs"
import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra } from "./plugin-import-rules.cjs"
import type { Linter } from "eslint"
import * as eslintBabelParser from "@babel/eslint-parser"
import * as nodePlugin from "eslint-plugin-node"
import * as importPlugin from "eslint-plugin-import"
import type { TransformOptions } from "@babel/core"

import js from "@eslint/js"

const babelOptions: TransformOptions = {
  plugins: ["@babel/plugin-syntax-flow", "@babel/plugin-syntax-jsx"],
}

export const jsConfig: Linter.Config[] = [
  {
    ...js.configs.recommended,
    files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx", "**/*.flow"],
    languageOptions: {
      parser: eslintBabelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions,
        ecmaVersion: "latest" as const,
        sourceType: "module" as const,
      },
      globals: {
        atom: "readonly",
      },
    },
    plugins: {
      // node: nodePlugin,
      import: importPlugin,
    },
    rules: {
      ...eslintRulesExtra,
      // ...pluginNodeRules,
      ...pluginImportRulesExtra,
      ...importPlugin.configs.recommended.rules,
    },
  },
]
