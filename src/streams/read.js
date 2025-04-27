import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "fileToRead.txt");

  try {
    const readStream = createReadStream(sourceFile, {
      encoding: "utf8",
    });

    await pipeline(readStream, process.stdout, {
      end: false,
    });

    console.log(); // костыль, без него Node не дожидается окончания pipeline
  } catch (err) {
    console.error("Error reading the file:", err);
  }
};

await read();
