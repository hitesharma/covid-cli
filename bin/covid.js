#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const data = require("../command/data");

program
  .command("key", "manage api key ");

program
  .option("-a", 'show country data')
  .action((cmd) => data(cmd));

program
  .option('-s', 'show states data')
  .action((cmd) => data(cmd));

program
  .version(pkg.version)
  .parse(process.argv);