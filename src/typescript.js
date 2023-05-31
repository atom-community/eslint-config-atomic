const { eslintRulesExtra } = require("./official-eslint-rules")
const { pluginImportRulesExtra, pluginImportTypeScriptRulesExtra } = require("./plugin-import-rules")
const { pluginNodeRules } = require("./plugin-node-rules")
const fs = require("fs")
const path = require("path")

const tsFiles = ["**/*.tsx", "**/*.ts"]
const project = ["**/tsconfig.json", "!**/node_modules/**/tsconfig.json"]

function findOneFile(cwd, fileEnding, ignoredFolders) {
  // recursively search the current folder for a file with the given fileEnding, ignoring the given folders, and return true as soon as one is found
  const files = fs.readdirSync(cwd, { withFileTypes: true, recursive: false })
  for (const file of files) {
    if (file.isDirectory()) {
      if (!ignoredFolders.includes(file.name)) {
        // if the folder is not ignored, search it recursively
        const found = findOneFile(path.join(cwd, file.name), fileEnding, ignoredFolders)
        if (found) {
          return true
        }
      }
    } else if (file.name.endsWith(fileEnding)) {
      // if the file ends with the given fileEnding, return true
      return true
    }
  }
  return false
}

/** Check if there are any tsconfig.json files */
function disableProjectBasedRules() {
  const hasTsFile = findOneFile(process.cwd(), ".ts", ["node_modules", ".git"])
  const hasTsConfig = findOneFile(process.cwd(), "tsconfig.json", ["node_modules", ".git"])

  // if there is no tsconfig.json file, but there are ts files, disable the project-based rules
  const disable = !hasTsConfig && hasTsFile

  if (disable) {
    console.warn(
      "\x1b[33m%s\x1b[0m",
      "No tsconfig.json found, disabling the project-based rules. To enable them, include all the **/*.ts(x)? files in the includes of the tsconfig.json files and run eslint again."
    )
  }

  return disable
}

function javaScriptRules() {
  // turn-off no-unused-vars for typescript files
  const typeScriptEslintExtra = { ...eslintRulesExtra }
  typeScriptEslintExtra["no-unused-vars"] = "off"

  return typeScriptEslintExtra
}

const pluginTypeScriptRulesExtra = {
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

const pluginTypeScriptProjectRules = disableProjectBasedRules()
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

exports.tsConfig = {
  // TypeScript files
  files: tsFiles,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
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
