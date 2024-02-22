const mongoose = require('mongoose') // Importando la libreria
const fetch = require('node-fetch');

// Creando el modelo de users
const HouseSchema = new mongoose.Schema({

    address: {
        type: String, 
        required: true

    },
    city: {
        type: String, 
        required: true

    },
    state: {
        type: String, 
        required: true


    },
    size: {
        type: Number, 
        required: true

    },
    type: {
        type: String, 
        required: true

    },
    zip_code: {
        type: String, 
        required: true

    },
    rooms: {
        type: Number, 
        required: true

    },
    bathrooms: {
        type: Number, 
        required: true

    },
    parking: {
        type: Boolean, 
        required: true

    },
    price: {
        type: Number, 
        required: true

    },
    code: {
        type: String, 
        required: true,
        unique: true

    },
    image: {
        type: String, 
        required: true

    }
})

//creando el modelo para validar el departamento
module.exports = mongoose.model('house', HouseSchema) 
