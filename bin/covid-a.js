const program = require("commander");
const pkg = require("../package.json");
const data = require("../command/data");

program
    .action(() => data.country())
    .parse(process.argv);
