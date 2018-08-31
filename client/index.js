const path = require('path')
const express = require('express')

const app = new express.Router()

if (process.env.NODE_ENV === 'production') {
  const buildPath = '/dist'
  // Serve any static files
  app.use('/', express.static(path.join(__dirname, buildPath)))
  // Handle routing, return all requests to home app
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, buildPath, 'index.html'))
  })
  app.get('/', (req, res) => {
    const baseUrl = req.baseUrl
    res.redirect(path.join(baseUrl))
  })
}

module.exports = app
