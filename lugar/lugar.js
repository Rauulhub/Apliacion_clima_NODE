const axios = require('axios');

const getLugarlatlng = async(direccion) => {
    const encodeURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': 'b4f6dd6d8fmsh4355f3308532f7bp118418jsn52241e3a8985' }
    }); // funcion para consumir API


    const resp = await instance.get(); //crea promesa con async
    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultado para ${direccion}`);
    } // maneja el error por si el reusltado no es encontrado
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;
    //le da valor a cada variable para imprimir
    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
        getLugarlatlng
    } //exporta la funcion