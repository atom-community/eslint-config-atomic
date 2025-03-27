import { command } from "execa"
import { resolve, dirname, join } from "path"
import packageJson from "../package.json" with { type: "json" }
// @ts-ignore
import gitly from "./gitly.js"
const { download, extract } = gitly as typeof import("./gitly.js")
import fs from "fs-extra"
const { pathExists, ensureDir, remove } = fs
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** A function that tests linting of a package */
async function testLint(packedPkg: string, testRepo: string, isWorkspace = false, isSilent = false) {
  try {
    console.log(`Testing ${testRepo}`)

    const distFolder = resolve(join(__dirname, "fixtures", testRepo))

    if (!(await pathExists(distFolder))) {
      const source = await download(testRepo)
      await ensureDir(distFolder)
      await extract(source, distFolder)
    }

    try {
      await command(`pnpm add "${packedPkg}" --ignore-scripts ${isWorkspace ? "-w" : ""}`, {
        cwd: distFolder,
        shell: true,
      })
    } catch (e) {
      console.error("\nPlease rerun pnpm test. This error happens because pnpm cannot delete locked files \n")
      throw e
    }

    const result = await command("eslint . --cache", { cwd: distFolder, stdout: isSilent ? "pipe" : "inherit" })
    if (result.failed) {
      throw new Error(result.stderr)
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message, err.stack)
    } else {
      console.error(err)
    }
    return false
  }

  return true
}

/** Main entry */
async function main() {
  const root = resolve(dirname(__dirname))
  const packedPkg = join(root, `${packageJson.name}-${packageJson.version}.tgz`)
  await remove(packedPkg)
  await command("pnpm pack", { cwd: root })

  const testRepos = [
    "atom-community/atom-ide-hyperclick",
    "atom-community/terminal",
    "atom-minimap/minimap",
    "aminya/solid-simple-table",
    "steelbrain/linter",
    "steelbrain/linter-ui-default",
  ].map((repo) => ({ repo, isWorkspace: false }))

  const testWorkspaces = [
    "atom-community/atom-ide-base",
    "atom-community/atom-languageclient",
    "atom-community/atom-ide-outline",
    "atom-community/atom-ide-datatip",
    // "atom-community/atom-ide-console",
    // "atom-community/atom-ide-debugger",
  ].map((repo) => ({ repo, isWorkspace: true }))

  let errsNumber = 0
  await Promise.all([
    ...[...testRepos, ...testWorkspaces].map(async (testRepo) => {
      if (!(await testLint(packedPkg, testRepo.repo, testRepo.isWorkspace))) {
        errsNumber++
      }
    }),
  ])

  await remove(packedPkg)

  if (errsNumber !== 0) {
    throw new Error(`${errsNumber} packages failed the tests. See the above.`)
  }
}

await main()
