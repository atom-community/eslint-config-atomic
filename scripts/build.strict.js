console.log("Running script to generate the strict versions (without only-warn)")

const { readFile, writeFile } = require("fs").promises
const { join, dirname, basename } = require("path")

const fileMap = {
  "index.js": "strict.js",
  "react.js": "strict-react.js",
}

;(async function main() {
  const root = dirname(__dirname)
  const files = ["index.js", "react.js"]

  const filesPaths = files.map((file) => join(root, file))

  filesPaths.forEach(async (filePath) => {
    const text = (await readFile(filePath)).toString()
    const newText = text.replace(/"only-warn"/g, "").replace("index.js", "strict.js")
    await writeFile(join(root, fileMap[basename(filePath)]), newText)
  })
})()
