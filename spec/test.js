const { mkdir, rm } = require("shelljs")
const execa = require("execa")
const { resolve, dirname, join } = require("path")
const pkg = require("../package.json")
const { download, extract } = require("gitly")
const { existsSync } = require("fs")

const testRepos = [
  "atom-community/atom-ide-hyperclick",
  "atom-community/atom-languageclient",
  "atom-community/terminal",
  "atom-community/atom-ide-outline",
  "atom-community/atom-ide-datatip",
  // "atom-community/atom-ide-console",
  // "atom-community/atom-ide-debugger",
  "atom-minimap/minimap",
  "aminya/solid-simple-table",
  "steelbrain/linter",
  "steelbrain/linter-ui-default",
]

const testWorkspaces = ["atom-community/atom-ide-base"]

/** a function that tests linting of a package */
async function testLint(packedPkg, testRepo, isWorkspace = false, isSilent = false) {
  console.log(`Testing ${testRepo}`)

  const distFolder = resolve(join(__dirname, "fixtures", testRepo))

  if (!existsSync(distFolder)) {
    const source = await download(testRepo)
    mkdir("-p", distFolder)
    await extract(source, distFolder)
  }

  try {
    await execa.command(`pnpm add "${packedPkg}" --ignore-scripts ${isWorkspace ? "-w" : ""}`, {
      cwd: distFolder,
      shell: true,
    })
  } catch (e) {
    console.log("\nPlease rerun pnpm test. This error happens because pnpm cannot delete locked files \n")
    throw e
  }

  const result = await execa.command("eslint .", { cwd: distFolder, stdout: !isSilent ? "inherit" : "pipe" })
  if (result.failed) {
    throw new Error("An error happened")
  }
}

/** main entry */
;(async function main() {
  const root = resolve(dirname(__dirname))
  const packedPkg = join(root, `${pkg.name}-${pkg.version}.tgz`)
  rm("-rf", packedPkg)
  await execa.command("pnpm pack", { cwd: root })

  for (const testRepo of testRepos) {
    // We want to observe the output in order, so we await inside loop
    await testLint(packedPkg, testRepo, false) // eslint-disable-line no-await-in-loop
  }
  for (const testWorkspace of testWorkspaces) {
    await testLint(packedPkg, testWorkspace, true, true) // eslint-disable-line no-await-in-loop
  }

  rm("-rf", packedPkg)
})()
