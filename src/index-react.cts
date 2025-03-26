import type { Linter } from "eslint"
import base from "./index.cjs"
import { tsConfigs } from "./typescript.cjs"
import reactPlugin from "eslint-plugin-react"
import globals from "globals"

const reactTypeScript: Linter.Config = {
  ...tsConfigs,
  ...reactPlugin.configs.flat.recommended,
}

const nonStrictConfig: Linter.Config[] = [
  ...base,
  // JavaScript:
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  // TypeScript:
  reactTypeScript,
]

export default nonStrictConfig
