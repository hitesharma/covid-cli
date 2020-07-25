#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("a", 'show country data')
  .command("s", 'show states data')
  .parse(process.argv);