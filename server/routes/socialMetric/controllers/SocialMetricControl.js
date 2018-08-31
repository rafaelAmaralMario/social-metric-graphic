// Control dependencies
const fs = require('fs')
const controller = {}

// getting the data from a json file.
controller.getData = (req, res) => {
  try {
    // Get content from file
    const contents = fs.readFileSync("./resource/json/get_metrics.json");
    // Define to JSON type
    const response = JSON.parse(contents);    
    return res.json(response);
  } catch (error) {
    res.statusCode = 500;
    return res.json({
      message: "failed to getting data from json file",
      error: error
    })  
  }       
}

module.exports = controller
