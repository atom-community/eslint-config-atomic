import { eslintRulesExtra } from "./official-eslint-rules.cjs"
import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { pluginImportRulesExtra } from "./plugin-import-rules.cjs"

export const jsConfig = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      plugins: [
        // enable jsx and flow syntax
        "@babel/plugin-syntax-flow",
        "@babel/plugin-syntax-jsx",
      ],
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["node", "import", "only-warn"],
  extends: ["eslint:recommended", "plugin:optimize-regex/all", "plugin:import/recommended", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    ...eslintRulesExtra,
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
  },
}
