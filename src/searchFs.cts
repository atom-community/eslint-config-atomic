import { readdirSync } from "fs"
import { join } from "path"
import { default as anymatch } from "anymatch"

export function findFilesForGroups(
  cwd: string,
  earlyExitSearchGroup: string[],
  exhaustiveSearchGroup: string[],
  ignored: string[],
) {
  const status = [false, false]
  searchDirectory(cwd, status, earlyExitSearchGroup, exhaustiveSearchGroup, ignored)

  return status
}

function searchDirectory(
  directory: string,
  status: boolean[],
  earlyExitSearchGroup: string[],
  exhaustiveSearchGroup: string[],
  ignored: string[],
): boolean {
  // recursively search the current folder for a file with the given fileEnding, ignoring the given folders, and return true as soon as one is found
  const files = readdirSync(directory, { withFileTypes: true, recursive: false })
  for (const file of files) {
    const path = join(directory, file.name)
    if (file.isDirectory()) {
      // if the folder is not ignored, search it recursively
      if (!anymatch(ignored, path)) {
        if (searchDirectory(path, status, earlyExitSearchGroup, exhaustiveSearchGroup, ignored)) {
          return true // exit
        }
      }
    } else {
      // check the early exit search group first
      status[0] = status[0] || anymatch(exhaustiveSearchGroup, path)
      if (status[0]) {
        return true // exit
      }

      // check the exhaustive search group
      status[1] = status[1] || anymatch(exhaustiveSearchGroup, path)
    }
  }

  return false // continue
}
