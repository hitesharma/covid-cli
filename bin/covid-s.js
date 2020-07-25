const program = require("commander");
const pkg = require("../package.json");
const data = require("../command/data");

program
    .action(() => data.states())
    .parse(process.argv);