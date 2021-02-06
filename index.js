const pluginNodeRules = {
  "node/no-exports-assign": "error",
  "node/process-exit-as-throw": "error",
  "node/shebang": "error",
  "node/no-deprecated-api": "error",
  // "node/file-extension-in-import": ["warn", "always"],
  "node/prefer-promises/dns": "error",
  "node/prefer-promises/fs": "error",
}

module.exports = {
  // JS Files
  root: true,
  env: {
    atomtest: true,
    es6: true,
    node: true,
    browser: true,
    jasmine: true,
  },
  globals: {
    atom: "readonly",
    measure: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["node", "import", "only-warn"],
  extends: ["eslint:recommended", "plugin:optimize-regex/all", "plugin:import/recommended", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    ...pluginNodeRules,
  },
  overrides: [
    {
      // Bundled node version with atom has an old ESLint
      // TypeScript files
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "node", "import", "only-warn"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:optimize-regex/all",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        ...pluginNodeRules,
      },
    },
    {
      // JSON files
      files: ["*.json"],
      plugins: ["json"],
      extends: ["prettier", "plugin:json/recommended"],
      rules: {
        "json/*": [
          "error",
          {
            allowComments: true,
          },
        ],
      },
    },
    {
      // CoffeeScript and CSON files
      files: ["**/*.coffee", "**/*.cson"],
      parser: "eslint-plugin-coffee",
      plugins: ["coffee", "node", "only-warn"],
      extends: [
        "plugin:coffee/eslint-recommended",
        "plugin:optimize-regex/all",
        "plugin:coffee/import",
        "plugin:coffee/prettier",
      ],
      rules: {
        ...pluginNodeRules,
      },
    },
    {
      // YAML files
      files: ["*.yaml", "*.yml"],
      plugins: ["yaml"],
      extends: ["plugin:yaml/recommended"],
    },
  ],
  settings: {
    "import/core-modules": ["atom", "electron"],
  },
}
