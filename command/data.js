const covidAPI = require('../lib/covidAPI');

const data = {

    async country() {
        try {
            const covid = await covidAPI();
            let countryData = covid.countryData;
            console.log(countryData);
        }
        catch (err) {
            console.log(err);
        }
    },

    async states() {
        try {
            const covid = await covidAPI();
            let stateData = covid.stateData;
            console.log(stateData);
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = data;