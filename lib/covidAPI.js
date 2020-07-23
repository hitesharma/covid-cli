const axios = require('axios');
const colors = require('colors');

const url = 'https://api.covid19india.org';

const covidAPI = async () => {
    try {
        let fetchedData = await axios.get(`${url}/data.json`);
        let fetchedDistrictData = await axios.get(`${url}/state_district_wise.json`);
        fetchedDistrictData = fetchedDistrictData.data;
        const { active, confirmed, recovered, deaths, lastupdatedtime } = fetchedData.data.statewise[0];
        let modifiedData = {
            overallData: { active, confirmed, recovered, deaths, lastupdatedtime },
            stateWiseData: fetchedData.data.statewise.splice(1, fetchedData.data.statewise.length).filter((state) => { return (state.statecode === "UN") ? false : true })
        }
        await modifiedData.stateWiseData.forEach((statename, index) => {
            if (fetchedDistrictData[statename.state] === undefined) {
                modifiedData.stateWiseData[index]['districtData'] = [];
            }
            else {
                modifiedData.stateWiseData[index]['districtData'] =
                    Object.keys(fetchedDistrictData[statename.state].districtData).map(key => {
                        let districtData = fetchedDistrictData[statename.state].districtData[key];
                        districtData.district = key;
                        return districtData;
                    });
            }
        })
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

module.exports = covidAPI;