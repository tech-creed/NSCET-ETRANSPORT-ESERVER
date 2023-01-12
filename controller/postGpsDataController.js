const admin = require("firebase-admin")

// firebase firestore database service init
const db = admin.database()

const getdata = async (req, res) => {
  db.ref('live').once('value')
    .then(function(snapshot) {
      console.log(snapshot.val())
    })
}

const storeHistory = async (req, res) => {
    // current Date
    const today = new Date()
    const yyyy = today.getFullYear()
    let mm = today.getMonth() + 1
    let dd = today.getDate()
    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm
    const formattedToday = dd + '-' + mm + '-' + yyyy

    // current minutes
    const minutes = today.getMinutes()
    const hours = today.getHours()
    const currentTime = hours+':'+minutes

    if (minutes==00 || minutes==10 || minutes==20 || minutes==30 || minutes==40 || minutes==50 ){
      let liveDataRef = db.ref('live')
      let locationHistoryRef = db.ref('location-history')

      liveDataRef.once('value')
        .then(function(snapshot) {
          var time = currentTime
          locationHistoryRef.child(formattedToday).child(currentTime).set(snapshot.val())
          res.send("History Saved Successfully")
        })
    }
}


// get collection data
const postGpsCoordinates = async (req, res) => {
  console.log(req.params['lat'])
  console.log(req.params['long'])
}

module.exports = {
  postGpsCoordinates,
  getdata,
  storeHistory
}
