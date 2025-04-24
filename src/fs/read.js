import { readFile } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { throwErrorIfNotExists } from "./utils.js";

const read = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "fileToRead.txt");

  await throwErrorIfNotExists(sourceFile);

  const content = await readFile(sourceFile, "utf8");
  console.log(content);
};

await read();
