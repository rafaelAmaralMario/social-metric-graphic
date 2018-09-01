const express = require('express')
const routes = require('./routes/');

const server = express.Router()

// setting the routes to the server
routes(server);

module.exports = server
