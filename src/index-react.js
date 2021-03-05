const base = require("./index.js")
const { tsConfig } = require("./typescript")

module.exports = {
  ...base,
  plugins: ["react", ...base.plugins],
  extends: ["plugin:react/recommended", ...base.extends],
  overrides: [
    // TypeScript:
    {
      ...tsConfig,
      plugins: ["react", ...tsConfig.plugins],
      extends: ["plugin:react/recommended", ...tsConfig.extends],
      rules: tsConfig.rules,
    },
    // The rest is the same
    ...base.overrides.slice(1),
  ],
  settings: {
    ...(base.settings || {}),
    react: {
      version: "detect",
    },
  },
}
