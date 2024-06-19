
const mongoose = require("mongoose")

const CarroSchema = new mongoose.Schema({
    
    linea: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: Number,
        require: true,
        validate: {
            validator: function(modelo){
                return modelo > 1900 
            }, 
            message: props => props.value + "no es un modelo válido!"
            }    
    },
    placa: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(placa){
                return /^[A-Z]{3}\d{3}$/.test(placa);
            },
            message: props => props.value + " no es una placa validad"
        }
    },
    cilindraje: {
        type: Number,
        require: true,
        validate: {
            validator: function(cilindraje){
                return cilindraje > 800 
            }, 
            message: props => props.value + "el cilindraje no es válido para la categoria de vehiculos comercializada"
            }    
    },
    capacidad: {
        type: Number,
        require: true,
        validate: {
            validator: function(capacidad){
                return capacidad > 0 & capacidad < 7 
            }, 
            message: props => props.value + "la capacidad no es permitida de acuerdo al modelo seleccionadoa"
            }    
}

})

module.exports= mongoose.model("carro", CarroSchema)