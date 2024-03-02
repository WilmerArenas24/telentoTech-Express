//creado la ruta para ver el rchivo en el servicio web 1

const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/departments', (req,res) =>{

    fs.readFile('archivo.txt', 'utf8', (err, data )=>{
        if(err){
            // console.log('Error al leer archivo');
        res.status(500).send({'status':'error', 'message': 'error obteniendo información'})
            return
        }
    
        res.send(data)
    })

})

module.exports = router // 2  exportando rutas

