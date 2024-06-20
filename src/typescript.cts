import js from "@eslint/js"
import * as typeScriptPlugin from "typescript-eslint"
import type { ESLint, Linter } from "eslint"
import * as importPlugin from "eslint-plugin-import"
import * as nodePlugin from "eslint-plugin-node"
import * as onlyWarnPlugin from "eslint-plugin-only-warn"
import * as optimizeRegexPlugin from "eslint-plugin-optimize-regex"
// import * as prettierPlugin from "eslint-plugin-prettier"
import type { GlobifiedEntry } from "globify-gitignore"
import makeSynchronous from "make-synchronous"
import { eslintRulesExtra } from "./official-eslint-rules.cjs"
import { pluginImportRulesExtra, pluginImportTypeScriptRulesExtra } from "./plugin-import-rules.cjs"
import { pluginNodeRules } from "./plugin-node-rules.cjs"
import { findOneFile } from "./utils.cjs"
import * as eslintTypeScriptParser from "@typescript-eslint/parser"

const tsFiles = ["**/*.tsx", "**/*.ts", "**/*.mts", "**/*.cts"]
const project = ["**/tsconfig.json", "!**/node_modules/**/tsconfig.json"]

function globifyGitIgnoreFileWithDeps(cwd: string, include: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { globifyGitIgnoreFile } = require("globify-gitignore") as typeof import("globify-gitignore") // prettier-ignore
  return globifyGitIgnoreFile(cwd, include)
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
  const hasTsFile = findOneFile(cwd, tsFiles, ignore)

  // return if there are no ts files
  if (!hasTsFile) {
    return true
  }

  // check if there is a tsconfig.json file
  const hasTsConfig = findOneFile(cwd, project, ignore)

  // if there is no tsconfig.json file, but there are ts files, disable the project-based rules
  const disable = !hasTsConfig && hasTsFile

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

export const tsConfig: Linter.FlatConfig<Linter.RulesRecord>[] = [
  // TypeScript files
  js.configs.recommended,
  ...typeScriptPlugin.configs.recommended,
  // optimizeRegexPlugin.configs!.all,

  {
    files: tsFiles,
    languageOptions: {
      parser: eslintTypeScriptParser,
      parserOptions: {
        project,
        createDefaultProgram: true, // otherwise Eslint will error if a ts file is not covered by one of the tsconfig.json files
      },
    },
    plugins: {
      node: nodePlugin,
      import: importPlugin,
      "only-warn": onlyWarnPlugin,
    },
    rules: {
      ...javaScriptRules(),
      ...pluginTypeScriptRulesExtra,
      ...pluginTypeScriptProjectRules,
      ...pluginNodeRules,
      ...pluginImportRulesExtra,
      ...pluginImportTypeScriptRulesExtra,
      ...importPlugin.configs.recommended.rules,
    },
  },
]
