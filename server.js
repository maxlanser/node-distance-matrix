const express = require('express');
const cors = require('cors');

const { googleApiIndex, googleApi } = require('./controllers/distance');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.set('view engine', 'pug');

server.get('/', googleApiIndex);
server.post('/', googleApi);

server.listen(3000, 'localhost', () => {
    console.log('Server started');
});