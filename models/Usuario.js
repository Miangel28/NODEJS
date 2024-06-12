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
        require: true,
        unique: true,
        validate: {
            validator: function(correo){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
            }, 
            message: props => props.value + "no es un correo electronico válido!"
        }
    },
    password: {
        type: String,
        require: true
    } 
})

module.exports = mongoose.model('usuario', UserSchema)