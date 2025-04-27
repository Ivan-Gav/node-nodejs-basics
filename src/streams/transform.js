import { Transform } from "stream";
import { pipeline } from "stream/promises";
import { stdin, stdout } from "process";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  await pipeline(stdin, reverseStream, stdout);
};

await transform();
