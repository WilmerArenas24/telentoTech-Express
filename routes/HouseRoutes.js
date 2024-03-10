const express = require('express');
const router = express.Router();
const HouseSchema = require('../models/House');
require('dotenv').config();



// Ruta POST para agregar una nueva casa
router.post('/house', async (req, res) => {
    try {
        // Crear una nueva instancia del modelo HouseSchema con los datos proporcionados en el cuerpo de la solicitud
        let house = new HouseSchema({
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            size: req.body.size,
            type: req.body.type,
            zip_code: req.body.zip_code,
            rooms: req.body.rooms,
            bathrooms: req.body.bathrooms,
            parking: req.body.parking,
            price: req.body.price,
            code: req.body.code,
            image: req.body.image
        });
        // Guardar la instancia de la casa en la base de datos y esperar a que se complete la operación
        const result = await house.save();
        // Enviar la respuesta con los datos de la casa recién creada
        res.send(result);
    } catch (err) {
        // En caso de error, registrar el error en la consola y enviar una respuesta de error al cliente
        console.error(err);
        res.status(500).send({ status: 'error' });
    }
});

//Traer todas las casas
router.get('/house', async (req, res) => {
    
    let house = await HouseSchema.find(); 
    res.json(house)
})

//Traer una de las casas
router.get('/house/:id', async (req, res) => {
    //Traer una casa en especifico pasando el ID
    var id = req.params.id
    let house = await HouseSchema.findById(id); 
    res.json(house)
})

// Ruta DELETE para eliminar una casa por su ID
router.delete('/house/:id', (req, res) => {    
    // Obtener el ID de los parámetros de la solicitud
    var id = req.params.id

    // Eliminar una casa en la base de datos utilizando el modelo HouseSchema
    HouseSchema.deleteOne({_id: id}).then(() => {        
        // Enviar una respuesta JSON si la eliminación fue exitosa
        res.json({"status": "success", "message": "House deleted successfully"})    
    }).catch((error) => {        
        //enviar una respuesta JSON indicando el fallo
        console.log(error)
        res.json({"status": "failed", "message": "Error deleting House"})    
    })
})

// Actualizar una casa 
router.patch('/house/:id', (req, res) => {
    //Actualizar una casa
    // Cuando viene por la url del servicio web params
    var id = req.params.id
    
    // Cuando viene por el body se usa body
    var updateHouse = {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        size: req.body.size,
        type: req.body.type,
        zip_code: req.body.zip_code,
        rooms: req.body.rooms,
        bathrooms: req.body.bathrooms,
        parking: req.body.parking,
        price: req.body.price,
        code: req.body.code,
        image: req.body.image
    }

    HouseSchema.findByIdAndUpdate(id, updateHouse, {new: true}).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.log(error)
        res.send("Error actualizando el registro")
    })
})







module.exports = router;

