const covidAPI = require('../lib/covidAPI');

const country = async () => {
    let covid = await covidAPI();
    let overallData = covid.overallData;
    console.log(overallData);
}
const states = async () => {
    let covid = await covidAPI();
    let stateData = covid.stateWiseData;
    console.log(stateData);
}

module.exports = { country, states };