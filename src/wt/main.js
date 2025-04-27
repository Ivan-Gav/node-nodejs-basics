import { Worker } from "worker_threads";
import { cpus } from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const performCalculations = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const workerFile = join(_dirname, "worker.js");

  const numCPUs = cpus().length;

  const workers = [];

  for (let i = 0; i < numCPUs; i++) {
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(workerFile);

      worker.once("message", (data) => {
        resolve({ status: "resolved", data });
      });

      worker.once("error", () => {
        resolve({ status: "error", data: null });
      });

      worker.postMessage(10 + i);
    });

    workers.push(workerPromise);
  }

  const results = await Promise.all(workers);

  console.log(results);
};

await performCalculations();
