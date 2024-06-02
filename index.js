require('dotenv').config();
const express = require('express');
const router = require('./Router/router');
require('./DB-Connection/Connection');
const cors = require('cors');

const BookServer = express();
BookServer.use(cors());
BookServer.use(express.json());
BookServer.use(router);
BookServer.use('/Uploads',express.static('./Uploads'))

const PORT = process.env.PORT || 4000;

BookServer.listen(PORT, () => {
    console.log(`Bookstore server starts at port: ${PORT}`);
});

BookServer.get('/', (req, res) => {
    res.send(`<h1>Bookstore server started and waiting for requests</h1>`);
});
