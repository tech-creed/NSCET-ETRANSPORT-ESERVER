const admin = require("firebase-admin")
// firebase
// initializeApp

const serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nscet-etransport-default-rtdb.asia-southeast1.firebasedatabase.app"
})
