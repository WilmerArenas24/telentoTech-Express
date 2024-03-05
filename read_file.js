//creado la ruta para ver el rchivo en el servicio web 1

const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path')



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

router.post('/departments', (req, res) => {
    const filePath = path.join(__dirname, 'departments.json');

    fs.readFile(filePath, 'utf8', (readErr, data) => {
        if (readErr) {
            console.error('Error al leer el archivo:', readErr);
            res.status(500).send(readErr);
            return;
        }

        try {
            const departments = JSON.parse(data);
            departments.push(req.body);

            fs.writeFile(filePath, JSON.stringify(departments), (writeErr) => {
                if (writeErr) {
                    console.error('Error al escribir en el archivo:', writeErr);
                    res.status(500).send(writeErr);
                    return;
                }

                res.send(req.body);
            });
        } catch (parseError) {
            console.error('Error al parsear el archivo JSON:', parseError);
            res.status(500).send('Error al parsear el archivo JSON');
        }
    });
});


module.exports = router // 2  exportando rutas

