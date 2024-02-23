const mongoose = require('mongoose');
const UserSchema = require('./User');
const MessageSchema = require('./Message');

// Definición del esquema para la colección de chats
const MessageSchema = new mongoose.Schema({
    // Campo 'from' que almacena el ObjectId del usuario que envía el mensaje
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Referencia al modelo de usuarios
        required: true
    },
    // Campo 'to' que almacena el ObjectId del usuario que recibe el mensaje
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Referencia al modelo de usuarios
        required: true
    },
    // Campo 'message' que almacena el contenido del mensaje
    message: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'message'
        }],
        required: true
    }
}, {
    timestamps: true // Agrega timestamps automáticamente (createdAt, updatedAt)
});

// Exporta el modelo 'chat' basado en el esquema ChatSchema
module.exports = mongoose.model('chat', MessageSchema);
