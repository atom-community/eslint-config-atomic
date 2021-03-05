exports.jsonOverides = {
  // JSON files
  files: ["*.json"],
  plugins: ["json"],
  extends: ["plugin:json/recommended", "prettier"],
  rules: {
    "json/*": [
      "error",
      {
        allowComments: true,
      },
    ],
  },
}
