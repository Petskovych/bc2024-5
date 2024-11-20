const commander = require('commander');
const express = require('express');
const fs = require('fs');
const path = require('path');

const program = new commander.Command();
program
  .requiredOption('-h, --host <type>', 'Server host')
  .requiredOption('-p, --port <number>', 'Server port')
  .requiredOption('-c, --cache <path>', 'Cache directory')
  .parse(process.argv);

const options = program.opts();

// Перевірка параметрів
if (!fs.existsSync(options.cache)) {
  console.error('Error: Cache directory does not exist');
  process.exit(1);
}

const app = express();
const cacheDir = path.resolve(options.cache);

// Логіка додаватиметься далі

app.listen(options.port, options.host, () => {
  console.log(`Server is running on http://${options.host}:${options.port}`);
});
