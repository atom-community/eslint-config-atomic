import { readdirSync } from "fs"
import { join } from "path"
import { default as anymatch } from "anymatch"

export function findFilesForGroups(cwd: string, searchGroups: string[][], ignored: string[]) {
  const status = searchGroups.map(() => false);
  searchDirectory(cwd, status, searchGroups, ignored);

  return status
}

function searchDirectory(directory: string, status: boolean[], searchGroups: string[][], ignored: string[]) {
    // recursively search the current folder for a file with the given fileEnding, ignoring the given folders, and return true as soon as one is found
  const files = readdirSync(directory, { withFileTypes: true, recursive: false });
  for (const file of files) {
    const path = join(directory, file.name);
    if (file.isDirectory()) {
      if (!anymatch(ignored, path)) {
        // if the folder is not ignored, search it recursively
        searchDirectory(path, status, searchGroups, ignored);
      }
    } else {
      // for each search group, check if the file matches any of the patterns
      for (const [index, searchGroup] of searchGroups.entries()) {
        if (!status[index] && anymatch(searchGroup, path)) {
          status[index] = true;
        }
      }
    }
  }
}
