const postGpsCoordinates = require('../controller/postGpsDataController.js')
const express = require('express')
const router = express.Router()

router.post('/:busno/:lat/:long/:altitude/:speed/:direction',postGpsCoordinates.postGpsCoordinates)

module.exports = router
