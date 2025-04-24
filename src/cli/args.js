import { parseArgs as parseArgsLikeAboss } from "util";

const parseArgs = () => {
  const args = process.argv.slice(2);

  const { values, positionals } = parseArgsLikeAboss({
    args,
    strict: false,
  });

  const result = Object.keys(values)
    .map((prop, i) => `${prop} is ${positionals[i]}`)
    .join(", ");

  console.log(result);
};

parseArgs();
