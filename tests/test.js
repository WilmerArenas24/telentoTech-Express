const request = require('supertest');
const app = require('../index.js');

// npx jest

describe('GET /', () => {
    it('responds with status 200', async () => { // Cambié "asyn" a "async"
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello world'); // Corregí "word" a "world"
    })

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
});
