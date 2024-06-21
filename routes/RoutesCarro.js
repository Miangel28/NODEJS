const express = require("express")
const app = express()
const CarroControllers = require("../controllers/CarroControllers")
const Controller = new CarroControllers()


app.get("/carro", Controller.getCarros)
app.post("/carro", Controller.createCarro)
app.get("/carro/:id", Controller.getCarroById)
app.put("/carro/:id", Controller.updateCarro)
app.delete("/carro/:id", Controller.deleteCarro)

module.exports = app