//chamar o mongoose
const mongoose = require('mongoose')

//criar a url da conexão com o mongo(com qualquer tipo de db). É uma string, é a url da conexão no mongo
//const DB_URL = "mongodb://localhost:27017/escute-um-idoso"

//criar a conexão com o db
//criar a função connection - mongoose.connection
// on e once

//dotEnv
const dotEnv = require('dotenv')

dotEnv.config();

const DB_URI = process.env.DB_URI
//const DB_URL = process.env.DB_URI || "mongodb://localhost:27017/escute-um-idoso"
const connect = () => {
  mongoose.connect(DB_URI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectado ao MongoDB'))
}

//exportar o connect
module.exports = { connect }

//arquivo dbconnect CRIA a conexão com o DB

