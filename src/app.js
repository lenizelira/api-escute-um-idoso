const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')


db.connect() 
app.use(cors())
app.use(express.json())


const index = require("./routes/index")
const lar = require("./routes/larRoute")



app.use("/", index)
app.use("/lar", lar)


module.exports = app //exportando tudo o que app no começo

