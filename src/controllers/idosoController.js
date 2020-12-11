
const idosoCollection = require("../models/idosoSchema")


const getAll = (request,response)=>{
    console.log(request.url)
    idosoCollection.find((error, idoso)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: "Get feito com sucesso",
                idoso
            })
        }
    })
}

const getByName = (request, response)=>{
    //const {nome} = req.params.nome 
    idosoCollection.findOne({nome:request.params.nome}, (error, idoso)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send(idoso)
        }
    })
}

const addIdoso = (request,response) =>{
    const idosoBody = request.body
    const idoso = new idosoCollection(idosoBody)

    idoso.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem : "Novo idoso criado com sucesso",
                idoso
            })
        }
    })
}

const deleteIdoso = (request, response) =>{
    const removerIdoso = request.query
    idosoCollection.findByIdAndDelete(removerIdoso, (error,idoso)=>{
        if (error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send("Idoso foi apagado")
        }
    })
}

const updateIdoso = (request, response) =>{
    const idParam = request.query
    const idosoBody = request.body
    const idosoAtualizado = {new:true}

    idosoCollection.findByIdAndUpdate(
        idParam,
        idosoBody,
        idosoAtualizado,
        (error,idoso)=>{
            if(error){
                console.log(error)
                return response.status(500).send({
                    mensagem: "Houve Falha",
                    error
                })
            }else{
                return response.status(200).send({
                    mensagem: "Este idoso foi atualizado com sucesso",
                    idoso
                })
            }
        }
    )
}



module.exports = {
    getAll,
    getByName,
    addIdoso,
    deleteIdoso,
    updateIdoso
}