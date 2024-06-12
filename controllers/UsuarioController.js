const UserSchema = require("../models/Usuario")
const bcrypt = require("bcrypt") 

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

        var id = req.params.id;

        var updateUser = {
            nombre:req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            password: req.body.password,

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
}

module.exports = UsuarioController
