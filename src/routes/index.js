const express = require("express")
const { version } = require("mongoose")
const router = express.Router()


//mensagem amigável sobre a api
router.get("/", function(request, response){
    response.status(200).send({
        titulo: "Api Escute um Idoso",
        version: "1.0.0"
    })
})

module.exports = router