const fs = require('fs')
const path = require('path')
// exporting all controllers of folder in this directory
module.exports = app => {
  fs
    .readdirSync(path.resolve(__dirname))
    .filter(file => ((file.indexOf('.')) !== 0))
    .forEach(file => { if (file !== 'index.js') require(path.resolve(__dirname, file))(app) })
}
