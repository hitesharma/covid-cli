const program = require('commander');
const key = require('../command/key');

program
    .command('set')
    .description('set api key')
    .action(key.set);

program
    .command('get')
    .description('get api key')
    .action(key.get);
program
    .command('rm')
    .description('remove api key')
    .action(key.rm);

program.parse(process.argv);