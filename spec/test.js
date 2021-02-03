const { exec, mkdir, rm  } = require("shelljs")
const { resolve, dirname, join } = require("path")
const pkg = require("../package.json")
const { download, extract } = require("gitly")

const testRepos = [
  "atom-community/atom-ide-hyperclick",
  "atom-community/atom-ide-signature-help",
  "atom-minimap/minimap",
  "steelbrain/linter",
  "steelbrain/linter-ui-default",
]

;(async function main() {
  const root = resolve(dirname(__dirname))
  const packedPkg = join(root, `${pkg.name}-${pkg.version}.tgz`)
  rm("-rf", packedPkg)
  exec("pnpm pack", {cwd: root})

  for (const testRepo of testRepos) {

    const source = await download(testRepo)

    const distFolder = resolve(join(__dirname, "fixtures", testRepo))
    rm("-rf", distFolder)
    mkdir("-p", distFolder)

    await extract(source, distFolder)

    exec(`pnpm add "${packedPkg}" --ignore-scripts`, {cwd: distFolder, silent: true})
    exec(`pnpm lint`, {cwd: distFolder})
  }
  rm("-rf", packedPkg)

})()
