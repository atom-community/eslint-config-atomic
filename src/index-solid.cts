import type { Linter } from "eslint"
import base from "./index.cjs"
import { tsConfig } from "./typescript.cjs"
import solid from "eslint-plugin-solid"

const solidTypeScript: Linter.Config = {
  ...tsConfig,
  ...(solid.configs["flat/typescript"] as unknown as Linter.Config),
}

const nonStrictConfig: Linter.Config[] = [
  ...base,
  // JavaScript:
  solid.configs["flat/recommended"] as unknown as Linter.Config,
  // TypeScript:
  solidTypeScript,
]

export default nonStrictConfig
