#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const { country, states } = require("../command/data");

program
  .option("-a", 'show country data')
  .action(() => country());

program
  .option('-s', 'show states data')
  .action(() => states());

program
  .version(pkg.version)
  .parse(process.argv);