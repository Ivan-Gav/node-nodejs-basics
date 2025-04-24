import { unlink } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { throwErrorIfNotExists } from "./utils.js";

const remove = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const fileToRemove = join(_dirname, "files", "fileToRemove.txt");

  await throwErrorIfNotExists(fileToRemove);

  await unlink(fileToRemove);
};

await remove();
