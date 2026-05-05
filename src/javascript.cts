import { eslintRulesExtra } from "./official-eslint-rules.cjs"
// eslint-plugin-node replaced with eslint-plugin-n (ESLint 9 compatible fork).
// Uncomment to enable node rules using eslint-plugin-n with n/ prefix.
// import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra, pluginImportSettings } from "./plugin-import-rules.cjs"
import type { Linter } from "eslint"
import * as eslintBabelParser from "@babel/eslint-parser"
import * as importPlugin from "eslint-plugin-import"
import type { TransformOptions } from "@babel/core"
import globals from "globals"

import js from "@eslint/js"

const babelOptions: TransformOptions = {
  plugins: [require.resolve("@babel/plugin-syntax-flow"), require.resolve("@babel/plugin-syntax-jsx")],
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
        ...globals.node,
        ...globals.browser,
        ...globals.atomtest,
      },
    },
    plugins: {
      // node: nodePlugin,
      ...importPlugin.flatConfigs.recommended.plugins,
    },
    rules: {
      ...eslintRulesExtra,
      // ...pluginNodeRules,
      ...importPlugin.flatConfigs.recommended.rules,
      ...pluginImportRulesExtra,
    },
    settings: {
      ...pluginImportSettings,
    },
  },
]
