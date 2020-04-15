const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv; // llama yargs para tomar datos de consola, destructura el obejto

const lugar = require('./lugar/lugar'); //llama la clase

const clima = require('./clima/clima'); //llama la clase

//lugar.getLugarlatlng(argv.direccion) // llama la funcion
//    .then(console.log); //imprime

const getInfo = async(direccion) => {
    try {
        const dir = await lugar.getLugarlatlng(direccion);
        const temp = await clima.getClima(dir.lat, dir.lng)
        return `el clima de ${direccion} con lat ${dir.lat} y long ${dir.lng} es de ${temp}`
    } catch (e) {
        return `no se encontro clima para ${direccion}`
    } // llama y guarda en variables las funciones, retorna lo requerido

    //   const dire = dir.dir;
    //   const lat = dir.lat;
    //   const lng = dir.lng;
    //   

    //  return {
    //      dire,
    //      lat,
    //      lng,
    //     temp
    //   }
};
getInfo(argv.direccion)
    // .then(console.log(`el clima para ${direccion} con latitud ${lat} y longitud${lng} es de ${temp} ºC`))
    .then(console.log)
    .catch(console.log)

//clima.getClima(40.45, -74.000)
//    .then(console.log)
//    .catch(console.log)