const { app } = require('./app.js');
const request = require('supertest');

describe('/GET /location', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/location?search=seattle');
            // check to see if the response is what we expect
            expect(response.body).toEqual({
                formatted_query: expect.any(String),
                lat: expect.any(String),
                lng: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff
            done();
        });
});

describe('/GET /weather', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/weather/');
            // check to see if the response is what we expect
            expect(response.body[0]).toEqual({
                forecast: expect.any(String),
                time: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff
            done();
        });
});

describe('/GET /reviews', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/reviews/');
            // check to see if the response is what we expect
            expect(response.body[0]).toEqual({
                name: expect.any(String),
                image_url: expect.any(String),
                price: expect.any(String),
                rating: expect.any(Number),
                url: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff
            done();
        });
});

describe('/GET /events', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/events/');
            // check to see if the response is what we expect
            expect(response.body[0]).toEqual({
                link: expect.any(String),
                name: expect.any(String),
                event_date: expect.any(String),
                summary: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff
            done();
        });
});

describe('/GET /trails', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/trails/');
            // check to see if the response is what we expect
            expect(response.body[0]).toEqual({
                name: expect.any(String),
                location: expect.any(String),
                length: expect.any(Number),
                stars: expect.any(Number),
                star_votes: expect.any(Number),
                summary: expect.any(String),
                trail_url: expect.any(String),
                conditions: expect.any(String),
                condition_date: expect.any(String),
                condition_time: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff
            done();
        });
});