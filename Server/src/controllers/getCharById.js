const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';


/*function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const { id, name, gender, species, origin, image, status } = response.data;
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify({ id, name, gender, species, origin, image, status }))
    })
    .catch((error) => {
        res.writeHead(500, {'Content-Type' : 'text/plain'})
        res.end(error.message)
    })
}

module.exports ={
    getCharById
}*/

/*function getCharById(req, res) {
    const { id } = req.params;

    axios.get(URL + id)
    .then (({data}) => {
        const  {  name, gender, species, origin, image, status } = data;
        const character = { id, name, gender, species, origin, image, status };

        return character.name
            ? res.json(character)
            : res.status(404).send('Character not found')
    })
    .catch((error) => {
        return res.status(500).send({message: error.message})
    })
}


module.exports = getCharById;*/

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const  {  name, gender, species, origin, image, status } = (
            await axios(URL + id)
        ).data;
        const character = { id, name, gender, species, origin, image, status };

        return character.name
        ? res.json(character)
        : res.status(404).send('Character not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = getCharById;