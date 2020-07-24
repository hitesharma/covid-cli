const covidAPI = require('../lib/covidAPI');

const data = {

    async country() {
        try {
            const covid = await covidAPI();
            let overallData = covid.overallData;
            console.log(overallData);
        }
        catch (err) {
            console.log(err);
        }
    },

    async states() {
        try {
            const covid = await covidAPI();
            let stateData = covid.stateWiseData;
            console.log(stateData);
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = data;