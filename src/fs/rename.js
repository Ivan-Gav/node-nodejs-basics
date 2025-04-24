import { access, rename as renameFile } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "wrongFilename.txt");
  const targetFile = join(_dirname, "files", "properFilename.md");

  try {
    await access(sourceFile);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    await access(targetFile);
    throw new Error("file already exists");
  } catch (e) {
    if (e.message === "file already exists") {
      throw new Error("FS operation failed");
    }
  }

  await renameFile(sourceFile, targetFile);
};

await rename();
