// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require("./strict.js")
module.exports = [{ ignores: ["dist/**", "spec/fixtures/**"] }, ...config]
