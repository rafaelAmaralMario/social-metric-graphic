// Server dependencies
const express = require('express')
const PORT = process.env.PORT || 8080 

// loading the modules
const server = require('./server/')
const client = require('./client/')




// initializing the application
const app = express()

// mapping the modules
app.use(server)
app.use(client)

// informing to the app on which port the server must be executed
app.listen(PORT, () => console.log(`Listening  on PORT ${PORT}`))