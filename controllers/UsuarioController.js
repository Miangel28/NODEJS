const UserSchema = require("../models/Usuario")
const bcrypt = require("bcrypt") 
const jwt = require('jsonwebtoken')
class UsuarioController {
    
    async getUsuarios ( req,res) {
        var usuarios = await UserSchema.find();
        res.json(usuarios)
    }


   async createUsuario(req,res){

        const hasheadPassword = await bcrypt.hash(req.body.password, 10)  

        var nuevoUsuario = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            password: hasheadPassword,
        }
        
        await UserSchema(nuevoUsuario).save()
        .then((result) => { //Cuando se ejecuta correctamente
            res.send({"status": "sucess", "message": "usuario Guardado correctamente"})
            }).catch((error) => { // Cuando hay un error 
                res.send({"status": "error", "message": error.message})
            }) 
    }

    async getUsuarioById(req,res) {
        var id = req.params.id
        var usuario = await UserSchema.findById(id)
        res.json(usuario)
    }

    async updateUsuario(req,res){
        const hasheadPassword = await bcrypt.hash(req.body.password, 10)

        var id = req.params.id;

        var updateUser = {
            nombre:req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            password: hasheadPassword,

        }

        await UserSchema.findByIdAndUpdate(id,updateUser, {new: true})
        .then((result) => { 
            res.send({"status": "sucess", "message": "usuario Actualizado correctamente"})
        }).catch((error) => {
            res.send({"status": "error", "message": error.message})

    }) 

    
    }

    async deleteUsuario(req,res){
        
        var id = req.params.id

        await UserSchema.deleteOne({_id: id})

        res.json({"status": "sucess", "message": "usuario borrado correctamente"})

    }
    async Login(req,res){
        var correo = req.body.correo;
        var password = req.body.password


        var usuario = await UserSchema.findOne({correo})
        if (usuario){
            var verificacionClave = await bcrypt.compare(password, usuario.password)
            if (verificacionClave) {
                
                usuario.password = null 
                const token = jwt.sign({usuario}, "secret", { expiresIn: "1h"})


                res.send({"satus": "Succes",
                    "message" : "Bienvenida " + usuario.nombre + " " + usuario.apellidos,
                    "user_id": usuario._id, 
                    "token": token,
                })
            }else {
                res.send({"status" : "Error", "massage" : "Los datos ingresados  son invalidos"})
            }
        }else {
            res.send({"status": "Error" , "message": " El correo ingresado no existe"})
        }
    }

}



module.exports = UsuarioController
