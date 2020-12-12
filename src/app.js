const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')


db.connect() 
app.use(cors())
app.use(express.json())


const index = require("./routes/index")
const lar = require("./routes/larRoute")
//const idoso = require ("./routes/idosoRoute")
//const ouvinte = require ("./routes/ouvinteRoute")




app.use("/", index)
app.use("/lar", lar)
//app.use("/idoso", idoso)
//app.use("/ouvinte", ouvinte)


module.exports = app //exportando tudo o que app no começo

