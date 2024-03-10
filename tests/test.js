const request = require('supertest'); // Libreria para probar APIs
const app = require('../index.js'); // importando todas las rutas

const objectToTest = {
        "address": "Cr13 H 11 12 Sur",
        "city": "Bogota",
        "state": "Bogota",
        "size": 1000,
        "type": "House",
        "zip_code": "8795",
        "rooms": 1,
        "bathrooms": 1,
        "parking": true,
        "price": 35000000,
        "code": "ABC7848",
        "image": "https://example2.com/property-image.jpg"
};

it('responds with a specific house for valid house ID', async () => {
    // id de la base de la casa
    const id = '65ed0db4f87cd9dd3ecebfcd';

    const response = await request(app).get(/house/+id);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();  // Asegura que la respuesta no sea nula o indefinida
    
});



    
/** Descripcion de la Prueba */
describe('GET /', () => {
    /** Descripcion especifica del caso a probar */
    it('responds with status 200', async () => {
        /** Simulando la solicitud HTTP */
        const response = await request(app).get('/');    
        /** Defino los valores esperados */    
        expect(response.status).toBe(200);
    })

        // test para la ruta para obtener las casas
        it('responds with an array object that contains an specific house', async () => { 
            const response = await request(app).get('/house');
            
            const objectToTest = {
                "_id": "65ea31365db6982faf31f152",
                "address": "Cr13 H 29 09 Sur",
                "city": "Villavicencio",
                "state": "Meta",
                "size": 1000,
                "type": "Apartamento",
                "zip_code": "123456",
                "rooms": 1,
                "bathrooms": 1,
                "parking": true,
                "price": 35000000,
                "code": "ABC888",
                "image": "https://example2.com/property-image.jpg",
        "__v": 0
            };
            
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body).toEqual(expect.arrayContaining([objectToTest])); 
        })
    
})

describe('POST /house', () => {
    it('create a new house in the DB and response with the data', async () => {
        const response = await request(app).post('/house').send(objectToTest)

        userId = response.body._id;

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('_id')
        expect(response.body.name).toBe(objectToTest.name)
        expect(response.body.lastname).toBe(objectToTest.lastname)
        expect(response.body.email).toBe(objectToTest.email)
    })
})


// test para la ruta de House 

describe('POST /house', () => {

    it('responds with success message for valid house ID', async () => {
        
        const id = '65ed0db4f87cd9dd3ecebfcd';
        const response = await request(app).delete(`/house/${id}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ "status": "success", "message": "House deleted successfully" });
    });

});


describe('PATCH /house/:id', () => {
    it('responds with updated house for valid house ID and data', async () => {
 
        const id = '65ed0db4f87cd9dd3ecebfcd';

        // Supongamos que tienes datos actualizados para la casa
        const updatedData = {
            "address": "Avenida siempre viva 123",
            "city": "Bogotá",
            "state": "Bogotá",
            "size": 2000,
            "type": "House",
            "zip_code": "54321",
            "rooms": 2,
            "bathrooms": 1,
            "parking": false,
            "price": 29000000,
            "code": "ABC124",
            "image": "https://example.com/property-image.jpg"
        };

        const response = await request(app)
            .patch(/house/+id)
            .send(updatedData);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();  
    });
})
