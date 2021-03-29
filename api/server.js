const express = require("express");
const CarsRouter = require('./cars/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome To The Cars API!"
    })
})

module.exports = server;
