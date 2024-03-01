const request = require('supertest');
const app = require('../index.js');

// npx jest para correr el test en terminal
// validando la ruta inicial

describe('GET /', () => {
    it('responds with status 200', async () => { // Cambié "asyn" a "async"
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello world'); // Corregí "word" a "world"
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
           it('responds with an array object that contains an specific user', async () => { // Cambié "asyn" a "async"
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
    
        describe('POST /user', () => {
            it('responds with an error message for a duplicate user', async () => {
                const newUser = {
                    "id": 123123,
                    "name": "Maria",
                    "lastname": "Zuleta",
                    "email": "Maria-zuleta-1@gmail.com",
                    "password": "usuarioprueba"
                }
        
                const response = await request(app).post('/user').send(newUser);
        
                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty('message', 'El correo ya fue registrado');
                expect(response.body).toHaveProperty('status', 'error');
            });
        });
        
        //TODO: Implementar el test de login y delete
        // describe('POST /login', () => {
        //     it('Succes login with email and password', async () => {
        //         const user = {
        //             "email": ""
        //         }
        
        //         const response = await request(app).post('/user').send(newUser);
        
        //         expect(response.status).toBe(200);
        //         expect(response.body).toHaveProperty('message', 'El correo ya fue registrado');
        //         expect(response.body).toHaveProperty('status', 'error');
        //     });
        // });
    
});
