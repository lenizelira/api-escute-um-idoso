//chamar mongoose
const mongoose = require('mongoose')
/* Dados para Collection do Idoso
id: autogerado e obrigatório
nome: texto e obrigatório
idade: texto e obrigatório
sexo: texto e obrigatorio
diaDeVisita: texto e obrigatório
horarioDeVisita: texto e obrigatorio */


//chamar Schema
const Schema = mongoose.Schema

const idosoSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
    auto: true,
    required: true
  },

  nome: {
    type: String,
    required: true
  },

  idade:{
    type: String,
    required: true
  },

  sexo: {
    type: String,
    required: true
  },

  diaDeVisita: {
      type: String,
      required: true
  },

 horarioDeVisita: {
    type: String, ////quando o número não faz nenhum cálculo, ele pode vir como String
    required: true
 }

})
const idosoCollection = mongoose.model('idoso', idosoSchema)

module.exports = idosoCollection