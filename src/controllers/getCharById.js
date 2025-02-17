const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

async function getCharById(req, res) {
    const id = req.params.id
try{
const response = await axios(URL + id);
    const { name, gender, species, origin, image, status } = response.data
    const character = { id, name, gender, species, origin, image, status }

    return character.name ? 
    res.status(200).json(character) :
    res.status(404).send('Not found') 

}catch(error){
    res.status(500).send(error.message)
}
    




    // axios.get(URL + id).then((response) => {
    //     const { name, gender, species, origin, image, status } = response.data
    //     const character = { id, name, gender, species, origin, image, status }

    //     return !character.name ? res.status(404).send('Not found') : res.status(200).json(character)
    // }).catch((error) => {
    //     res.status(500).send(error.message)
    // })
}

module.exports = getCharById







// const axios = require('axios')

// function getCharById(res, id){
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const {name, gender, species, origin, image, status} = response.data
//         const character = {
//             id: id,
//             name: name,
//             gender: gender,
//             species: species,
//             origin: origin,
//             image: image,
//             status: status
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify(character))
//     }).catch((error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'})
//         res.end(error.message)
//     })
// }

// module.exports = getCharById
