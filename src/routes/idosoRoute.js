const express = require('express')
const router = express.Router()

const controller = require("../controllers/idosoController")




router.get("/", controller.getAll)
router.post("/criar", controller.addIdoso)
router.put('/atualizar/:id', controller.updateIdoso)
router.delete('/delete/:id', controller.deleteIdoso)