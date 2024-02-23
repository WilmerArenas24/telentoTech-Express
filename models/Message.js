const mongoose = require('mongoose');
const UserSchema = require('./User');

// Definición del esquema para la colección de mensajes
const MessageSchema = new mongoose.Schema({
    // Contenido del mensaje
    body: {
        type: String,
        required: true
    },

    // Usuario que envía el mensaje
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Referencia al modelo de usuarios
        required: true
    },

    // Usuario que recibe el mensaje
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Referencia al modelo de usuarios
        required: true
    },

    // Estado de lectura del mensaje
    readed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Agrega timestamps automáticamente (createdAt, updatedAt)
});

// Exporta el modelo 'chat' basado en el esquema MessageSchema
module.exports = mongoose.model('chat', MessageSchema);

