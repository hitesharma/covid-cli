const axios = require('axios');
const colors = require('colors');

const covidAPI = async () => {
    try {
        const url = 'https://api.covid19india.org';
        let fetchedData = await axios.get(`${url}/data.json`);
        const { active, confirmed, recovered, deaths, lastupdatedtime } = fetchedData.data.statewise[0];
        let result = {
            countryData: { active, confirmed, recovered, deaths, lastupdatedtime },
            stateData: fetchedData.data.statewise.splice(
                1,
                fetchedData.data.statewise.length).filter((state) => {
                    return (state.statecode === "UN") ? false : true
                })
        }

        return result;
    } catch (error) {
        console.log(error)
    }
}

module.exports = covidAPI;