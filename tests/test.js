const request = require('supertest');
const app = require('../index.js');

// npx jest

describe('GET /', () => {
    it('responds with status 200', async () => { // Cambié "asyn" a "async"
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello world'); // Corregí "word" a "world"
    });
});
