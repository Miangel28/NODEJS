const express = require('express')// Importando la libreria
const app = express() // inicializamos la variable de la libreria
const UsuarioController = require('../controllers/UsuarioController') //importamos el controlador
const controller = new UsuarioController();//creamos una instancia

// creamos servicios web
app.get('/Usuario', controller.getUsuarios)
app.post('/Usuario', controller.createUsuario)
app.get("/Usuario/:id", controller.getUsuarioById)
app.put("/Usuario/:id", controller.updateUsuario)
app.delete("/Usuario/:id", controller.deleteUsuario)



module.exports = app