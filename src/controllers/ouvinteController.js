
const ouvinteCollection = require("../models/ouvinteSchema")


const getAll = (request,response)=>{
    console.log(request.url)
    ouvinteCollection.find((error, ouvinte)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: "Get feito com sucesso",
                ouvinte
            })
        }
    })
}

const getByName = (request, response)=>{
    //const {nome} = req.params.nome 
    ouvinteCollection.findOne({nome:request.params.nome}, (error, ouvinte)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send(ouvinte)
        }
    })
}

const addOuvinte = (request,response) =>{
    const ouvinteBody = request.body
    const ouvinte = new ouvinteCollection(ouvinteBody)

    ouvinte.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem : "Novo ouvinte criado com sucesso",
                ouvinte
            })
        }
    })
}

const deleteOuvinte = (request, response) =>{
    const removerouvinte = request.query
    ouvinteCollection.findByIdAndDelete(removerouvinte, (error,ouvinte)=>{
        if (error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send("O ouvinte foi apagado")
        }
    })
}

const updateouvinte = (request, response) =>{
    const idParam = request.query
    const ouvinteBody = request.body
    const update = {new:true}

    ouvinteCollection.findByIdAndUpdate(
        idParam,
        ouvinteBody,
        update,
        (error,ouvinte)=>{
            if(error){
                console.log(error)
                return response.status(500).send({
                    mensagem: "Houve Falha",
                    error
                })
            }else{
                return response.status(200).send({
                    mensagem: "Este ouvinte foi atualizado com sucesso",
                    ouvinte
                })
            }
        }
    )
}



module.exports = {
    getAll,
    getByName,
    addOuvinte,
    deleteOuvinte,
    updateouvinte
}