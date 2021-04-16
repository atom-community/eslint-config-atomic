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

/** A function that tests linting of a package */
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
    console.error("\nPlease rerun pnpm test. This error happens because pnpm cannot delete locked files \n")
    throw e
  }

  const result = await execa.command("eslint .", { cwd: distFolder, stdout: !isSilent ? "inherit" : "pipe" })
  if (result.failed) {
    throw new Error("An error happened")
  }
}

/** Main entry */
;(async function main() {
  const root = resolve(dirname(__dirname))
  const packedPkg = join(root, `${pkg.name}-${pkg.version}.tgz`)
  rm("-rf", packedPkg)
  await execa.command("pnpm pack", { cwd: root })

  const errs = []
  for (const testRepo of testRepos) {
    try {
      // We want to observe the output in order, so we await inside loop
      await testLint(packedPkg, testRepo, false) // eslint-disable-line no-await-in-loop
    } catch (err) {
      console.error(err)
      errs.push(err)
    }
  }

  for (const testWorkspace of testWorkspaces) {
    try {
      await testLint(packedPkg, testWorkspace, true, true) // eslint-disable-line no-await-in-loop
    } catch (err) {
      console.error(err)
      errs.push(err)
    }
  }
  if (errs.length !== 0) {
    rm("-rf", packedPkg)
    throw new Error(`${errs.length} packages failed the tests. See the above.`)
  }

  rm("-rf", packedPkg)
})()
