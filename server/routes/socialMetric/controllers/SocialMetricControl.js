// Control dependencies
const fs = require('fs')
const controller = {}

// getting the data from a json file.
controller.getData = (req, res) => {
  try {
    // Get content from file
    var contents = fs.readFileSync("./resource/json/get_metrics.json");
    // Define to JSON type
    var response = JSON.parse(contents);    
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: "failed to getting data from json file",
      error: error
    })  
  }       
}

module.exports = controller
