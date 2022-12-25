const admin = require("firebase-admin")

// firebase firestore database service init
const db = admin.database()

// get collection data
const postGpsCoordinates = async (req,res)=>{
console.log(req.params['lat'])
console.log(req.params['long'])
}

module.exports = {postGpsCoordinates}
