const child_process = require("child_process")

function getEslintVersion() {
  if (process.argv[1].includes("eslint.js")) {
    const eslintVersion = child_process.execFileSync(process.argv[0], [process.argv[1], "--version"], {
      encoding: "utf8",
      stdio: "pipe",
    })
    return eslintVersion
  } else {
    return require("eslint/package.json").version
  }
}

exports.getEslintVersion = getEslintVersion
