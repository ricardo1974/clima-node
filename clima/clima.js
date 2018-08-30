const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c45566eff1ec5d920a34060099c7a368`)

    if (resp === 'ZERO_RESULTS') {
        throw new Error(`Coordenada no encontrada`);
    }

    let main = resp.data.main;

    return main.temp;
}

module.exports = {
    getClima
}