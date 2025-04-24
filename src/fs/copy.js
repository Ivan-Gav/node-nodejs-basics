import { access, mkdir, cp } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceDir = join(_dirname, "files");
  const targetDir = join(_dirname, "files_copy");

  try {
    await access(sourceDir);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    await access(targetDir);
    throw new Error("target directory already exists");
  } catch (e) {
    if (e.message === "target directory already exists") {
      throw new Error("FS operation failed");
    }
  }

  await mkdir(targetDir);
  await cp(sourceDir, targetDir, { recursive: true });
};

await copy();
