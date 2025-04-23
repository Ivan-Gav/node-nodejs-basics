import { writeFile, access } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const content = "I am fresh and young";
  const folderName = "files";
  const fileName = "fresh.txt";

  const targetFolder = join(
    dirname(fileURLToPath(import.meta.url)),
    folderName
  );
  const file = join(targetFolder, fileName);

  try {
    await access(file);

    throw new Error(`File already exists`);
  } catch (error) {
    if (error.message === `File already exists`) {
      throw new Error("FS operation failed");
    }
  }

  await writeFile(file, content);
};

await create();
