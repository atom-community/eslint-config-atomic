import { Linter } from "eslint"
import base from "./index.cjs"
import { tsConfig } from "./typescript.cjs"

const nonStrictConfig: Linter.Config = {
  ...base,
  plugins: ["solid", ...(base.plugins ?? [])],
  extends: ["plugin:solid/recommended", ...(base.extends ?? [])],
  overrides: [
    // TypeScript:
    {
      ...tsConfig,
      plugins: ["solid", ...(tsConfig.plugins ?? [])],
      extends: ["plugin:solid/typescript", ...(tsConfig.extends ?? [])],
      rules: tsConfig.rules,
    },
    // The rest is the same
    ...(base.overrides?.slice(1) ?? []),
  ],
}

export default nonStrictConfig
