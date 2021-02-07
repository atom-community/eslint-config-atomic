const pluginNodeRules = {
  "node/no-exports-assign": "error",
  "node/process-exit-as-throw": "error",
  "node/shebang": "error",
  "node/no-deprecated-api": "error",
  "node/prefer-promises/dns": "error",
  "node/prefer-promises/fs": "error",
}

const pluginImportExtraRules = {
  "import/no-absolute-path": "error",
  "import/no-useless-path-segments": "error",
  "import/no-deprecated": "error",
  "import/no-extraneous-dependencies": "error",
  "import/no-unassigned-import": "warn",
  "import/no-mutable-exports": "warn",
  "import/no-anonymous-default-export": "error",
  "import/no-amd": "error",
  //// might be to restrictive:
  // "import/no-commonjs": "warn",
  // "import/no-dynamic-require": "warn", // prevent abusing dynamic require
  //// don't work properly:
  // "import/unambiguous": "error",
  // "import/no-unused-modules": ["warn", {"missingExports": true}],
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
    ...pluginImportExtraRules,
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
        ...pluginImportExtraRules,
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
      extends: ["plugin:coffee/eslint-recommended", "plugin:optimize-regex/all", "plugin:coffee/prettier"],
      rules: {
        ...pluginNodeRules,
        ...pluginImportExtraRules,
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
    // support TypeScript and Coffee importing
    "import/extensions": [".ts", ".tsx", ".d.ts", ".js", ".jsx", ".coffee"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx", ".coffee"],
      },
    },
  },
}
