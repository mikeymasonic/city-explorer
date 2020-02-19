const { app } = require('./app.js');
const request = require('supertest');

describe('/GET /location/:lat/:lon/', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/location/:lat/:lon/');
            // check to see if the response is what we expect
            expect(response.body).toEqual({
                search_query: 'whatever',
                formatted_query: 'other-thing', 
                location_name: expect.any(String),
                lat: expect.any(String),
                lon: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff :sparkle-emoji:
            done();
        });
});

describe('/GET /weather/:lat/:lon/', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/weather/:lat/:lon/');
            // check to see if the response is what we expect
            expect(response.body).toEqual([{
                lat: expect.any(Number),
                lon: expect.any(Number),
                forecast: expect.any(String),
                time: expect.any(String)
            }]);
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff :sparkle-emoji:
            done();
        });
});