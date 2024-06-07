const mongoose = require("mongoose") //importamos la libreria mongoose

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellidos:{
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    } 
})

module.exports = mongoose.model('usuario', UserSchema)