const express = require('express');
const router = express.Router();
const HouseSchema = require('../models/House');
require('dotenv').config();

router.get('/house', async (req, res) => {
    res.send('hola que tal');
});

router.post('/house', async (req, res) => {
    try {
        let house = new HouseSchema({
            address: req.body.address,
            city: req.body.city
        });

        // Guardar la casa en la base de datos
        const result = await house.save();

        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'error' });
    }
});


router.get('/house-obtener', async (req, res) => {
    //Traer todas las casas
    let house = await HouseSchema.find(); 
    res.json(house)
})



module.exports = router;

