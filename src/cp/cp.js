import { spawn } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const scriptFile = join(_dirname, "files", "script.js");

  const child = spawn("node", [scriptFile, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument", "someArgument99"]);
