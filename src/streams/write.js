import { createWriteStream } from "fs";
import { stdin } from "process";
import { pipeline } from "stream/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const targetFile = join(_dirname, "files", "fileToWrite.txt");

  const writableStream = createWriteStream(targetFile, { flags: "w" });
  await pipeline(stdin, writableStream);
};

await write();
