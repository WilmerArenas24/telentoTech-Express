const express = require('express') //Importo la libreria
const app = express() //Inicializacion de la variable que usara la libreria
const router = express.Router(); // Enrutar los servicios web
const port = 3000; // Escuchar la ejecucion del servidor
require('dotenv').config()

const socket = require('socket.io') //importando la libreria socket.io
const http = require('http').Server(app)
const io = socket(http)//creando variable para web socket

const DB_URL = process.env.DB_URL || '';

const mongoose = require('mongoose'); // Importo la libreria mongoose
mongoose.connect(DB_URL) // Creo la cadena de conexion

const userRoutes = require('./routes/UserRoutes');
const houseRoutes = require('./routes/HouseRoutes');
const messageRoutes = require('./routes/MessageRoutes'); // Importa las rutas de casas

//Metodo [GET, POST, PUT, PATCH, DELETE]
// Nombre del servicio [/]
router.get('/', (req, res) => {
    //Informacion a modificar
    res.send("Hello world")
})

//implementando las funciones de websocket
io.on('connect', (socket) => {
    console.log("connected")
    //Escuchando eventos desde el servidor
    socket.on('message', (data) => {
        /** Almacenando el mensaje en la BD */
        var payload = JSON.parse(data)
        console.log(payload)
        MessageSchema(payload).save().then((result) => {
            socket.emit('message-receipt', {"message": "Mensaje almacenado"})
        }).catch((err) => {
            console.log({"status" : "error", "message" :err.message})
        })        
    })

    socket.on('disconnect', (socket) => {
        console.log("disconnect")    
    })
})

app.use(express.urlencoded({extended: true})) // Acceder a la informacion de las urls
app.use(express.json()) // Analizar informacion en formato JSON

//activando servidor websocket
app.use((req, res, next)=>{
    res.io = io
    next()
})

//Ejecuto el servidor web
app.use(router)
app.use('/', userRoutes)
app.use('/', houseRoutes)
app.use('/', messageRoutes)
app.use('/uploads', express.static('uploads')); // para acceder desde el navegador, debemos copiar la ruta de avatar cuando se llama desde postman
http.listen(port, () => {
    console.log('Listen on ' + port)
})