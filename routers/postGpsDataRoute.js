const postGpsCoordinates = require('../controller/postGpsDataController.js')
const express = require('express')
const router = express.Router()

router.get('/:lat/:long',postGpsCoordinates.postGpsCoordinates)

module.exports = router
