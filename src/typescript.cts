import { eslintRulesExtra } from "./official-eslint-rules.cjs"
import { pluginImportRulesExtra, pluginImportTypeScriptRulesExtra } from "./plugin-import-rules.cjs"
import { pluginNodeRules } from "./plugin-node-rules.cjs"
import makeSynchronous from "make-synchronous"
import { findFilesForGroups } from "./utils.cjs"
import type { GlobifiedEntry } from "globify-gitignore"
import { Linter } from "eslint"

const tsFiles = ["**/*.tsx", "**/*.ts", "**/*.mts", "**/*.cts"]
const tscConfigFiles = ["**/tsconfig.json", "!**/node_modules/**/tsconfig.json"]

async function globifyGitIgnoreFileWithDeps(cwd: string, include: boolean) {
  try {
    // import in the function to allow makeSynchronous to work
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { globifyGitIgnoreFile } = require("globify-gitignore") as typeof import("globify-gitignore") // prettier-ignore
    const { existsSync } = require("fs") as typeof import("fs")
    const { join } = require("path") as typeof import("path")
    /* eslint-enable @typescript-eslint/no-var-requires */

    if (!existsSync(join(cwd, ".gitignore"))) {
      return []
    }
    return await globifyGitIgnoreFile(cwd, include)
  } catch (error) {
    console.error(error)
    return []
  }
}
const globifyGitIgnoreFileSync = makeSynchronous(globifyGitIgnoreFileWithDeps) as (
  cwd: string,
  include: boolean,
) => GlobifiedEntry[] | undefined

/** Check if there are any tsconfig.json files */
function disableProjectBasedRules() {
  const cwd = process.cwd()

  // get all the files that are ignored by git
  const ignore =
    globifyGitIgnoreFileSync(cwd, true)?.map((entry) => {
      if (entry.included) {
        return `!${entry.glob}`
      }
      return entry.glob
    }) ?? []
  ignore.push(
    "./**/.git/**",
    "./**/node_modules/**",
    "./**/dist/**",
    "./**/build/**",
    "./**/coverage/**",
    "./**/target/**",
  )

  // check if there are any ts files
  const [hasTscConfig, hasTsFile] = findFilesForGroups(cwd, tscConfigFiles, tsFiles, ignore)

  // if there is no tsconfig.json file, but there are ts files, disable the project-based rules
  const disable = !hasTscConfig && hasTsFile

  if (disable) {
    console.warn(
      "\x1b[33m%s\x1b[0m",
      "No tsconfig.json found, disabling the project-based rules. To enable them, include all the **/*.ts(x)? files in the includes of the tsconfig.json files and run eslint again.",
    )
  }

  return disable
}

function javaScriptRules(): Linter.RulesRecord {
  // turn-off no-unused-vars for typescript files
  return { ...eslintRulesExtra, "no-unused-vars": "off" }
}

const pluginTypeScriptRulesExtra: Linter.RulesRecord = {
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/camelcase": "off",
  "@typescript-eslint/no-use-before-define": "off",
  "@typescript-eslint/member-delimiter-style": "off",
  "@typescript-eslint/no-inferrable-types": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  // "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  // "@typescript-eslint/prefer-function-type": "error",
  // "@typescript-eslint/prefer-literal-enum-member": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  // "@typescript-eslint/prefer-string-starts-ends-with": "error",
}

const pluginTypeScriptProjectRules: Linter.RulesRecord = disableProjectBasedRules()
  ? {}
  : {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
    }

export const tsConfig: Linter.ConfigOverride<Linter.RulesRecord> = {
  // TypeScript files
  files: tsFiles,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: tscConfigFiles,
    createDefaultProgram: true, // otherwise Eslint will error if a ts file is not covered by one of the tsconfig.json files
  },
  plugins: ["@typescript-eslint", "node", "import", "only-warn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:optimize-regex/all",
    "plugin:import/recommended",
    "prettier",
  ],
  rules: {
    ...javaScriptRules(),
    ...pluginTypeScriptRulesExtra,
    ...pluginTypeScriptProjectRules,
    ...pluginNodeRules,
    ...pluginImportRulesExtra,
    ...pluginImportTypeScriptRulesExtra,
  },
}
