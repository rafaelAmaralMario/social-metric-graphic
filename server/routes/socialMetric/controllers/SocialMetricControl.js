// Control dependencies
const fs = require('fs');

const controller = {}

// getting the data from a json file.
controller.getData = (req, res) => {
  try {
    var content = fs.readFileSync("/json/get_metrics.json");
    return res.status(200).json(content)    
  } catch (error) {
    return res.status(404).send({
      message: "failed to getting data from json file",
      error
    })  
  }       
}

module.exports = controller
