const express = require('express')// Importando la libreria
const app = express() // inicializamos la variable de la libreria
const UsuarioController = require('../controllers/UsuarioController') //importamos el controlador
const controller = new UsuarioController();//creamos una instancia

// creamos servicios web
app.get('/Usuario', controller.getUsuarios)
app.post('/Usuario', controller.createUsuario)

module.exports = app