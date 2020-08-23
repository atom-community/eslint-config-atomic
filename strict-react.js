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
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "extends": ["eslint:recommended", "plugin:react/recommended", "prettier", "prettier/react"],
  "ignorePatterns": ["node_modules/"],
  "overrides": [
    {
      // Bundled node version with atom has an old ESLint
      // TypeScript files
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "@typescript-eslint/parser",
      "plugins": ["react", "@typescript-eslint"],
      "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
      ],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/member-delimiter-style": "off"
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
      // CoffeeScript files
      "files": ["**/*.coffee"],
      "parser": "eslint-plugin-coffee",
      "plugins": ["coffee"],
      "extends": ["plugin:coffee/eslint-recommended"]
    },
    {
      // YAML files
      "files": ["*.yaml", "*.yml"],
      "plugins": ["yaml"],
      "extends": ["plugin:yaml/recommended"]
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
