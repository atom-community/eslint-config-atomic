import type { Linter } from "eslint"
import base from "./index.cjs"
import { tsConfig } from "./typescript.cjs"

const nonStrictConfig: Linter.FlatConfig[] = [
  ...base,
  // JavaScript:
  {
    files: ["*.js", "*.jsx", "*.mjs", "*.cjs"],
    plugins: ["solid", ...(base.plugins ?? [])],
    extends: ["plugin:solid/recommended", ...(base.extends ?? [])],
  },
  // TypeScript:
  {
    ...tsConfig,
    plugins: ["solid", ...(tsConfig.plugins ?? [])],
    extends: ["plugin:solid/typescript", ...(tsConfig.extends ?? [])],
    rules: tsConfig.rules,
  },
  // The rest is the same
  ...(base.overrides?.slice(1) ?? []),
]

export default nonStrictConfig
