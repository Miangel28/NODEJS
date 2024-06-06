// configuracion de express 
const express = require('express') // estamos importando la libreria
const send = require('send')
const app = express() // Inicializamos la variable de la libreria libreria 
const port = 3000// definimos el puerto a usar


//Creando el servicio web
//Funcionalidad de nuestra APPI
//[get, post, put, patch, delate]
//res => Response => respuesta
// req => Request => Informacion de entrada


app.get('/', (req, res) => {
    //muestra en pantalla Hello World
    res.send("hello world")
})

app.get('/Saludar', (req,res) => {
    res.send("Hola,como estas?")
}) 
app.get('/Preguntar',(req,res) => { // Linea obligatoria para la libreria express
    res.send("¿Que haces ?")
})

app.get('/Responder/:accion',(req,res) => {
    // Parametro de la URL
    var accion = req.params.accion
    res.send("Estoy estudiando ingles"+ accion)
})
app.get('/Ingles', (req,res) => {
     res.send("for example, what is your name?")
})
app.get('/ResponderIngles', (req,res) => {
    res.send("My name is Miguel")
})
app.get('/Openenglish', (req,res) => {
    res.send("Eeeeeeexiiiitooo")
})

app.get('/:Profesion/:Empresa/:Experiencia' , ( req,res) => {
    var Profesion = req.params.Profesion
    var Empresa = req.params.Empresa
    var Experiencia = req.params.Experiencia
    res.send(" Hola, yo soy " + Profesion + " trabajo en la empresa " +Empresa+ " y llevo " +Experiencia+ " años en esta compañia ")
})

app.get('/mascota/:tipo', (req,res) =>{
    var tipo = req.params.tipo
    var animal = "" 
    if(tipo == "perro"){
        animal= "Guauu"
    }else if ( tipo == "Vaca"){
        animal= "Muuuuu"
    }else if (tipo == "leon"){
        animal = "Gruuuu"
    } else if (tipo == "Pez") {
        animal= "Glu glu glu"
    }else{
        animal= "Adopta una mascota"
    }
    res.send(animal)
})

app.post('/crear/usuario', (req,res) => {
    res.send("Estoy creando un usuario")
})
app.put('/actualizar/usuario', (req,res) =>{
    res.send("Estoy actualizando un usuario con PUT")
})
app.patch('/actualizar/usuario' , ( req,res) => {
    res.send("Estoy actualizando un usuario con el metodo PATCH")
})
app.delete('/eliminar/usuario', (req,res) => {
    res.send("Estoy eliminando un usuario")
})
//Ejecutamos el servidor
app.listen(port,() =>{
    console.log("Listen on " + port)
})
