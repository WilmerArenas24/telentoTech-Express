const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data )=>{
    if(err){
        console.log('Error al leer archivo');
        return
    }

    console.log(data)
})