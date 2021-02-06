const base = require("./index.js")

let overrides = base.overrides
// TypeScript:
overrides[0] = {
  ...overrides[0],
  plugins: ["react", ...overrides[0].plugins],
  extends: ["plugin:react/recommended", ...overrides[0].extends, "prettier/react"],
  rules: overrides[0].rules,
}

module.exports = {
  ...base,
  plugins: ["react", ...base.plugins],
  extends: ["plugin:react/recommended", ...base.extends, "prettier/react"],
  overrides: overrides,
  settings: {
    ...(base.settings || {}),
    react: {
      version: "detect",
    },
  },
}
