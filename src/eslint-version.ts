import child_process from "child_process"
import eslintPackageJson from "eslint/package.json"

export function getEslintVersion() {
  if (process.argv[1].includes("eslint.js")) {
    const eslintVersion = child_process.execFileSync(process.argv[0], [process.argv[1], "--version"], {
      encoding: "utf8",
      stdio: "pipe",
    })
    return eslintVersion
  } else {
    return eslintPackageJson.version
  }
}
