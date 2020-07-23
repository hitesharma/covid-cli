const inquirer = require('inquirer');
const KeyManager = require('../lib/KeyManager');
const colors = require('colors');
const { isRequired } = require('../lib/validation');

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter api key'.green,
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);

        if (key) {
            console.log('api key set'.blue);
        }
    },

    async get() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log(`current api key: ${key.yellow}`)
        }
        catch (err) {
            console.log(err.message);
        }
    },

    async rm() {
        try {
            const keyManager = new KeyManager();
            keyManager.rmKey();

            console.log('key removed'.red);
            return;
        }
        catch (err) {
            console.log(err.message.red);
        }
    }
}

module.exports = key;