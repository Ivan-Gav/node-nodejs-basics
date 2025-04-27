import { readdir } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { throwErrorIfNotExists } from "./utils.js";

const list = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceDir = join(_dirname, "files");

  await throwErrorIfNotExists(sourceDir);

  const files = await readdir(sourceDir);
  console.log(files);
};

await list();
