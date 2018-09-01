const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers')
const router = express.Router()



// setting the route to the getSocialMetric api
router.use(express.static('/../../resource'));
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
// setting headers to the API request.
router.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
});
router.get('/getSocialMetricData', controllers.SocialMetricControl.getData)

module.exports = app => app.use('/api', router)
