import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "node:zlib";
import { pipeline } from "stream/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const compress = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "fileToCompress.txt");
  const targetFile = join(_dirname, "files", "archive.gz");

  const readStream = createReadStream(sourceFile);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(targetFile);

  await pipeline(readStream, gzipStream, writeStream);
};

await compress();
