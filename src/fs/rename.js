import { rename as renameFile } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { throwErrorIfExists, throwErrorIfNotExists } from "./utils.js";

const rename = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "wrongFilename.txt");
  const targetFile = join(_dirname, "files", "properFilename.md");

  await Promise.all([
    throwErrorIfNotExists(sourceFile),
    throwErrorIfExists(targetFile),
  ]);

  await renameFile(sourceFile, targetFile);
};

await rename();
