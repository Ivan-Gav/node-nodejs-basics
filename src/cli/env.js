const parseEnv = () => {
  const rssVariables = [];

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) {
      rssVariables.push(`${key}=${value}`);
    }
  }

  if (rssVariables.length > 0) {
    console.log(rssVariables.join("; "));
  }
};

parseEnv();
