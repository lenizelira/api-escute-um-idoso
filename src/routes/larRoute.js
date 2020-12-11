const express = require('express')
const router = express.Router()

const controller = require("../controllers/larController")



router.get("/", controller.getAll)
router.post("/criar", controller.addLar)
router.put('/atualizar/:id', controller.updateLar)
router.delete('/delete/:id', controller.deleteLar)

module.exports = router
