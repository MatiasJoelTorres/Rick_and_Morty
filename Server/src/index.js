/*const http = require('http');
//const data = require('./utils/data')
const { getCharById}  = require('./controllers/getCharById')

http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;

    if(url.includes( '/rickandmorty/character')){
        const id = parseInt(url.split('/').pop());
        const character = data.find((char) => {
            return char.id === id
        });

        if (character){
            res.writeHead(200, {'Content-Type' : 'application/json'})
            return res.end((JSON.stringify(character)))
        } else {
            res.writeHead(404, {'Conten-Type':'text/plain'});
            return res.end('Personaje no encontrado')
        }
    } else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        return res.end('La ruta es incorrecta')
    }*/

    /*if (url.includes('/rickandmorty/character')){
        const id = parseInt(url.split('/').pop())
        return getCharById(res, id);
    }

}).listen(3001, 'localhost')*/

//const express = require('express');
//const router = require ('./routes/index')
const server = require('./app');
const PORT = 3001;


/*server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use('/rickandmorty', router);*/

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT)
});