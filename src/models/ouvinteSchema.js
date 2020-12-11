//chamar mongoose
const mongoose = require('mongoose')

//chamar Schema
const Schema = mongoose.Schema


/* Dados para Collection do Ouvinte
id: autogerado e obrigatório
nome: texto e obrigatório
telefone: texto e obrigatório
endereco: texto e obrigatório */

const ouvinteSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
    auto: true,
    required: true
  },
  nome: {
    type: String,
    required: true
  },

  telefone:{
    type: String,
    required: true
  },

  endereco: {
    type: String,
    required: true
  }
})

const ouvinteCollection = mongoose.model('lar', ouvinteSchema)

module.exports = ouvinteCollection