const { mkdir, rm  } = require("shelljs")
const execa = require('execa');
const { resolve, dirname, join } = require("path")
const pkg = require("../package.json")
const { download, extract } = require("gitly");
const { existsSync } = require("fs");

const testRepos = [
  "atom-community/atom-ide-hyperclick",
  "atom-community/terminal",
  "atom-minimap/minimap",
  "steelbrain/linter",
  "steelbrain/linter-ui-default",
]

;(async function main() {
  const root = resolve(dirname(__dirname))
  const packedPkg = join(root, `${pkg.name}-${pkg.version}.tgz`)
  rm("-rf", packedPkg)
  await execa.commandSync("pnpm pack", {cwd: root})

  for (const testRepo of testRepos) {
  	console.log(`Testing ${testRepo}`)

    const distFolder = resolve(join(__dirname, "fixtures", testRepo))

    if (!existsSync(distFolder)) {
      const source = await download(testRepo)
      mkdir("-p", distFolder)
      await extract(source, distFolder)
    }

    await execa.commandSync(`pnpm add "${packedPkg}" --ignore-scripts`, {cwd: distFolder, shell: true})
    await execa.commandSync("eslint .", {cwd: distFolder, stdout: 'inherit'})
  }
  rm("-rf", packedPkg)

})()
