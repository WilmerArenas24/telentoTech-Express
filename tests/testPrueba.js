const request = require('supertest'); // libreria para test
const app = require('../index.js'); //importando todas las rutas

// creando variables globales para poder probar el codigo con el test
const objectToTest = {
    "id": 11177723123,
    "name": "Maria",
    "lastname": "Zuleta",
    "email": "Maria-zuleta-001@gmail.com",
    "password": "usuarioprueba"
}

let userId;
let token;

describe('POST /user', () => {
    it('responds with an error message for a duplicate user', async () => {

        const response = await request(app).post('/user').send(objectToTest);
        userId = response.body._id     

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', "El Id o correo ya fueron registrados");
        expect(response.body).toHaveProperty('status', 'error');
    });
});
// mi codigo


describe('GET /', () => {
    it('responds with status 200', async () => { // Cambié "asyn" a "async"
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello world'); // Corregí "word" a "world"
    })
    // test para la ruta de usuarios 
    it('responds with an array object that contains an specific user', async () => { 
        const response = await request(app).get('/user');
        
        const objectToTest = {
            "_id": "65cfe1fe297a14a9e28374a0",
            "id": 12,
            "name": "prueba correo actualizacion 3",
            "lastname": "Prueba 3",
            "email": "Pruebaactualizacion@gmail.com",
            "password": "$2b$10$SoXw71E6nElIj.Hc2vOjS.ndM14coogxGdvfPo.YrVQXQZhhwhcSe",
            "__v": 0,
            "avatar": "uploads\\1708390891252-gato.png"
        };
        
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toEqual(expect.arrayContaining([objectToTest])); 
    })

       // test para la ruta de usuarios 
    it('responds with an array object that contains an specific user', async () => { // Cambié "asyn" a "async"
        const response = await request(app).get('/user');
        
        const objectToTest = {
            "_id": "65cfe1fe297a14a9e28374a0",
            "id": 12,
            "name": "prueba correo actualizacion 3",
            "lastname": "Prueba 3",
            "email": "Pruebaactualizacion@gmail.com",
            "password": "$2b$10$SoXw71E6nElIj.Hc2vOjS.ndM14coogxGdvfPo.YrVQXQZhhwhcSe",
            "__v": 0,
            "avatar": "uploads\\1708390891252-gato.png"
        };
        
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toEqual(expect.arrayContaining([objectToTest])); 
    })

           // test para la ruta de usuarios 
           it('responds with an array object that contains an specific user', async () => { 
            const id = "65cfe1fe297a14a9e28374a0";      
            const response = await request(app).get('/user/'+id);
             
            const objectToTest = {
                "_id": "65cfe1fe297a14a9e28374a0",
                "id": 12,
                "name": "prueba correo actualizacion 3",
                "lastname": "Prueba 3",
                "email": "Pruebaactualizacion@gmail.com",
                "password": "$2b$10$SoXw71E6nElIj.Hc2vOjS.ndM14coogxGdvfPo.YrVQXQZhhwhcSe",
                "__v": 0,
                "avatar": "uploads\\1708390891252-gato.png"
            };
            expect(response.status).toBe(200);
            expect(typeof response.body === "object").toBe(true);
            expect(response.body).toStrictEqual(objectToTest); 
        });

    

    
});
