const xlsx = require('xlsx')
require('dotenv').config() // Obetenmos las variables de entorno
const bcrypt = require('bcrypt');

/** Conexion a BD */
const DB_URL = process.env.DB_URL || '';
const mongoose = require('mongoose'); // Importo la libreria mongoose
mongoose.connect(DB_URL) // Creo la cadena de conexion
const UserSchema = require('./models/User') 

const workbook = xlsx.readFile('datos.xlsx')
const sheet_list = workbook.SheetNames
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_list[0]])

for(const user of data){
    const hashedPassword = bcrypt.hashSync(user.password, 10)
    user.password = hashedPassword
}

UserSchema.insertMany(data).then(()=>{
    console.log('Información subida exitosamennte')
}).catch(err => console.log('Error subiendo la información', err))
