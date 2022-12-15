const admin = require("firebase-admin")

// firebase firestore database service init
const db = admin.firestore()

// get collection data
const postGpsCoordinates = async (req,res)=>{
  // collection Reference
  const colRef =  db.collection('gps-coordinates')
  await colRef.get()
    .then((snapshot)=>{
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      })
    })
      .catch(err=>console.log(err))
}

module.exports = {postGpsCoordinates}
