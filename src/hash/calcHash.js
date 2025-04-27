import { createHash } from "crypto";
import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const sourceFile = join(_dirname, "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");
  const stream = createReadStream(sourceFile);

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const result = hash.digest("hex");
    console.log(result);
  });
};

await calculateHash();
