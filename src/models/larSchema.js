//chamar mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const larSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
        auto: true,
        required: true
    },
    nomeRazao: {
        type: String,
        required: true
    },
    CNPJ: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String, //quando o número não faz nenhum cálculo, ele pode vir como String
        required: true
    }
})

const larCollection = mongoose.model('lar', larSchema)

module.exports = larCollection

