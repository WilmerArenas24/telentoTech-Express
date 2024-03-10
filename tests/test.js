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
    expect(response.body).toBeDefined();  
    
});


describe('POST /house', () => {
    it('creates a new house in the DB and responds with the data', async () => {
        // datos para una nueva casa
        const objectToTest = {
            address: 'Direccion de prueba',
            city: 'Bogota',
            state: 'Bogota',
            size: 150,
            type: 'Casa',
            zip_code: '12345',
            rooms: 3,
            bathrooms: 2,
            parking: true,
            price: 200000,
            code: 'ABC177',
            image: 'imagen.jpg'
        };

        const response = await request(app)
            .post('/house')
            .send(objectToTest);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.address).toBe(objectToTest.address);
        expect(response.body.city).toBe(objectToTest.city)
        expect(response.body.state).toBe(objectToTest.state)
        expect(response.body.size).toBe(objectToTest.size)
        expect(response.body.type).toBe(objectToTest.type)
        expect(response.body.zip_code).toBe(objectToTest.zip_code)
        expect(response.body.rooms).toBe(objectToTest.rooms)
        expect(response.body.bathrooms).toBe(objectToTest.bathrooms)
        expect(response.body.parking).toBe(objectToTest.parking)
        expect(response.body.price).toBe(objectToTest.price)
        expect(response.body.code).toBe(objectToTest.code)
        expect(response.body.image).toBe(objectToTest.image)
        
    });

    
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
        expect(response.body.address).toBe(objectToTest.address)
        expect(response.body.city).toBe(objectToTest.city)
        expect(response.body.state).toBe(objectToTest.state)
        expect(response.body.size).toBe(objectToTest.size)
        expect(response.body.type).toBe(objectToTest.type)
        expect(response.body.zip_code).toBe(objectToTest.zip_code)
        expect(response.body.rooms).toBe(objectToTest.rooms)
        expect(response.body.bathrooms).toBe(objectToTest.bathrooms)
        expect(response.body.parking).toBe(objectToTest.parking)
        expect(response.body.price).toBe(objectToTest.price)
        expect(response.body.code).toBe(objectToTest.code)
        expect(response.body.image).toBe(objectToTest.image)
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

        // datos a actyualizar 
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


