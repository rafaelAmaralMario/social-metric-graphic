const express = require('express')
const controllers = require('./controllers')
const router = express.Router()

// setting the route to the getSocialMetric api
router.use(express.static('/../../resource'));
router.get('/getSocialMetricData', controllers.SocialMetricControl.getData)

module.exports = app => app.use('/api', router)
