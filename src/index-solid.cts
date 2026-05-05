import type { Linter } from "eslint"
import base from "./index.cjs"
import { tsConfig } from "./typescript.cjs"
import solid from "eslint-plugin-solid"
import { defineConfig } from "@eslint/config-helpers"

const solidTypeScript: Linter.Config = {
  ...tsConfig,
  ...(solid.configs["flat/typescript"] as unknown as Linter.Config),
}

const nonStrictConfig = defineConfig([
  ...base,
  // JavaScript:
  solid.configs["flat/recommended"] as unknown as Linter.Config,
  // TypeScript:
  solidTypeScript,
])

export default nonStrictConfig
