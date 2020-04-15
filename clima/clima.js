const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=957c3b5cff99ce05b74012dfb469d019&units=metric`);

    return resp.data.main.temp;


}
module.exports = {
    getClima
}