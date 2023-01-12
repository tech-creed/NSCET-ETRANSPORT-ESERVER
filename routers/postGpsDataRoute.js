const postGpsCoordinates = require('../controller/postGpsDataController.js')
const express = require('express')
const router = express.Router()

router.get('/',postGpsCoordinates.getdata)
router.get('/store/history',postGpsCoordinates.storeHistory)
router.get('/transmit/:lat/:long',postGpsCoordinates.postGpsCoordinates)

module.exports = router
