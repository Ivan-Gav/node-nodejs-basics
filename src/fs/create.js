import { writeFile } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { throwErrorIfExists } from "./utils.js";

const create = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const content = "I am fresh and young";
  const folderName = "files";
  const fileName = "fresh.txt";

  const targetFolder = join(_dirname, folderName);
  const file = join(targetFolder, fileName);

  await throwErrorIfExists(file);
  await writeFile(file, content);
};

await create();
