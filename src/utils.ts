import { readdirSync } from "fs"
import { join } from "path"
import { default as anymatch } from "anymatch"

export function findOneFile(cwd: string, search: string[], ignored: string[]) {
  // recursively search the current folder for a file with the given fileEnding, ignoring the given folders, and return true as soon as one is found
  const files = readdirSync(cwd, { withFileTypes: true, recursive: false })
  for (const file of files) {
    const path = join(cwd, file.name)
    if (file.isDirectory()) {
      if (!anymatch(ignored, path)) {
        // if the folder is not ignored, search it recursively
        const found = findOneFile(path, search, ignored)
        if (found) {
          return true
        }
      }
    } else if (anymatch(search, path)) {
      // if the file ends with the given fileEnding, return true
      return true
    }
  }
  return false
}
