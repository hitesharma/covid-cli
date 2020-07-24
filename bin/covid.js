#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const data = require("../command/data");

program
  .option("-a", 'show country data')
  .action(() => data.country());

program
  .option("-s", 'show states data')
  .action(() => data.states());

program
  .version(pkg.version)
  .parse(process.argv);