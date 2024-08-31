const axios = require('axios')

const url = 'https://titulosvalidez.educacion.gob.ar/validez/detitulos/'

const x = "/validez/detitulos/noaccess.php?msj=Lamentablemente%20no%20hay%20turnos%20disponibles%20debido%20al%20alto%20nivel%20de%20demanda.%3Cbr%3EPor%20favor,%20vuelva%20a%20intentar%20en%20otro%20momento."
const checkInterval = 5000;
let fallas = 0;
let aciertos = 0;

async function checkPage(req, res) {
    try {
        const response = await axios.get(url);
        let path = await response.request.path
        if (x == path) {
            fallas += 1
            // res.status(200).json(
            res.status(200).json(response.request.res.responseUrl)
            console.log(`posibles fallas = ${fallas}`)

        } else {
            aciertos += 1;
            // res.status(200).json(`posibles fallas = ${aciertos}`)
            console.log(response)
            res.status(200).json(response.request.res.responseUrl)
            console.log(`posibles aciertos = ${aciertos}`)

        }

    } catch (error) {
        console.error(error)
    }
}

//   const interval = setInterval(checkPage, checkInterval);

module.exports = checkPage