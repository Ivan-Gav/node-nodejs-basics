import { mkdir, cp } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { throwErrorIfExists, throwErrorIfNotExists } from "./utils.js";

const copy = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceDir = join(_dirname, "files");
  const targetDir = join(_dirname, "files_copy");

  await Promise.all([
    throwErrorIfNotExists(sourceDir),
    throwErrorIfExists(targetDir),
  ]);

  await mkdir(targetDir);
  await cp(sourceDir, targetDir, { recursive: true });
};

await copy();
