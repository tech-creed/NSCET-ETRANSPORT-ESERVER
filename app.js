// importing requirements
const express = require("express")
const cookieParser = require("cookie-parser")

//Routers



//--------------------------------------------------------//
//creating a server
const app = express()

// register view engine as ejs
app.set('view engine', 'ejs')

// cookie praser for access the browser cookie
app.use(cookieParser())

// static file
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

const PORT = process.env.PORT || 8888

app.listen(PORT, () => { console.log('API Server.................ok') });

// 404 Page
app.use((req, res) => {
  res.status(404).send('404 No Route Found')
});