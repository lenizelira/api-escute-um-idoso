
const larCollection = require("../models/larSchema")


const getAll = (request,response)=>{
    console.log(request.url)
    larCollection.find((error, lar)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: "Get feito com sucesso",
                lar
            })
        }
    })
}

const getByName = (request, response)=>{
    //const {nome} = req.params.nome 
    larCollection.findOne({nome:request.params.nome}, (error, lar)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send(lar)
        }
    })
}

const addLar = (request,response) =>{
    const larBody = request.body
    const lar = new larCollection(larBody)

    lar.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem : "Novo lar criado com sucesso",
                lar
            })
        }
    })
}

const deleteLar = (request, response) =>{
    const removerlar = request.query
    larCollection.findByIdAndDelete(removerlar, (error,lar)=>{
        if (error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send("Este lar foi apagado")
        }
    })
}

const updateLar = (request, response) =>{
    const idParam = request.query
    const larBody = request.body
    const update = {new:true}

    larCollection.findByIdAndUpdate(
        idParam,
        larBody,
        update,
        (error,lar)=>{
            if(error){
                console.log(error)
                return response.status(500).send({
                    mensagem: "Houve uma falha",
                    error
                })
            }else{
                return response.status(200).send({
                    mensagem: "Este lar foi atualizado com sucesso",
                    lar
                })
            }
        }
    )
}



module.exports = {
    getAll,
    getByName,
    addLar,
    deleteLar,
    updateLar
}