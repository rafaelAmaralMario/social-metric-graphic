const express = require('express')
const routes = require('./routes/');

const server = express.Router()

routes(server);

module.exports = server
