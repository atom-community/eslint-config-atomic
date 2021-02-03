const base = require("./index.js")

let overrides = base.overrides
overrides[0] = {
  ...overrides[0],
  plugins: ["react", "@typescript-eslint", "only-warn"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: overrides[0].rules,
}

module.exports = {
  ...base,
  plugins: ["react", "only-warn"],
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "prettier/react"],
  overrides: overrides,
  settings: {
    react: {
      version: "detect",
    },
  },
}
