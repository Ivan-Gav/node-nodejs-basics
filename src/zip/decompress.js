import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "stream/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const decompress = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "archive.gz");
  const targetFile = join(_dirname, "files", "fileToCompress.txt");

  const readStream = createReadStream(sourceFile);
  const gzipStream = createGunzip();
  const writeStream = createWriteStream(targetFile);

  await pipeline(readStream, gzipStream, writeStream);
};

await decompress();
