module.exports = {
  // JS Files
  "root": true,
  "env": {
    "atomtest": true,
    "es6": true,
    "node": true,
    "browser": true,
    "jasmine": true
  },
  "globals": {
    "atom": "readonly",
    "measure": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": ["only-warn"],
  "extends": ["eslint:recommended", "plugin:optimize-regex/all", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "overrides": [
    {
      // Bundled node version with atom has an old ESLint
      // TypeScript files
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint", "only-warn"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:optimize-regex/all",
        "prettier",
        "prettier/@typescript-eslint"
      ],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    },
    {
      // JSON files
      "files": ["*.json"],
      "plugins": ["json"],
      "extends": ["prettier", "plugin:json/recommended"],
      "rules": {
        "json/*": [
          "error",
          {
            "allowComments": true
          }
        ]
      }
    },
    {
      // CoffeeScript and CSON files
      "files": ["**/*.coffee", "**/*.cson"],
      "parser": "eslint-plugin-coffee",
      "plugins": ["coffee", "only-warn"],
      "extends": ["plugin:coffee/eslint-recommended", "plugin:optimize-regex/all", "plugin:coffee/prettier"]
    },
    {
      // YAML files
      "files": ["*.yaml", "*.yml"],
      "plugins": ["yaml"],
      "extends": ["plugin:yaml/recommended"]
    }
  ]
}
