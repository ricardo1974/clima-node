const argv = require('./config/yargs').argv;
const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en la ciudad de ${ direccion } es de ${ temp }°`;
    } catch (e) {
        return `No se pudo determinar la temperatura en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));