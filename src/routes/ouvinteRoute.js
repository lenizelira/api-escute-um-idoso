const express = require('express')
const router = express.Router()

const controller = require("../controllers/ouvinteController")


router.get("/", controller.getAll)
router.post("/criar", controller.addOuvinte)
router.put('/atualizar/:id', controller.updateouvinte)
router.delete('/delete/:id', controller.deleteOuvinte)