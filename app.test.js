const { app } = require('./app.js');
const request = require('supertest');

describe('/GET /location', () => {
    test('It should respond with an object of the correct shape',
    // get the done function to call after the test
        async(done) => {
            // feed our express app to the supertest request
            const response = await request(app)
                // and hit out express app's about route with a /GET
                .get('/location/');
            // check to see if the response is what we expect
            expect(response.body).toEqual({
                formatted_query: expect.any(String),
                lat: expect.any(String),
                lng: expect.any(String)
            });
            // it should have a status of 200
            expect(response.statusCode).toBe(200);
            // the callback has a 'done' that we can call to fix stuff :sparkle-emoji:
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

// describe('/GET /yelp', () => {
//     test('It should respond with an object of the correct shape',
//     // get the done function to call after the test
//         async(done) => {
//             // feed our express app to the supertest request
//             const response = await request(app)
//                 // and hit out express app's about route with a /GET
//                 .get('/yelp/');
//             // check to see if the response is what we expect
//             expect(response.body[0]).toEqual({
//                 name: expect.any(String),
//                 image_url: expect.any(String),
//                 price: expect.any(String),
//                 rating: expect.any(Number),
//                 url: expect.any(String)
//             });
//             // it should have a status of 200
//             expect(response.statusCode).toBe(200);
//             // the callback has a 'done' that we can call to fix stuff
//             done();
//         });
// });

// describe('/GET /events', () => {
//     test('It should respond with an object of the correct shape',
//     // get the done function to call after the test
//         async(done) => {
//             // feed our express app to the supertest request
//             const response = await request(app)
//                 // and hit out express app's about route with a /GET
//                 .get('/events/');
//             // check to see if the response is what we expect
//             expect(response.body).toEqual({
//                 link: expect.any(String),
//                 name: expect.any(String),
//                 date: expect.any(String),
//                 summary: expect.any(String)
//             });
//             // it should have a status of 200
//             expect(response.statusCode).toBe(200);
//             // the callback has a 'done' that we can call to fix stuff
//             done();
//         });
// });

// describe('/GET /weather/:lat/:lon/', () => {
//     test('It should respond with an object of the correct shape',
//     // get the done function to call after the test
//         async(done) => {
//             // feed our express app to the supertest request
//             const response = await request(app)
//                 // and hit out express app's about route with a /GET
//                 .get('/weather/:lat/:lon/');
//             // check to see if the response is what we expect
//             expect(response.body).toEqual([{
//                 lat: expect.any(Number),
//                 lon: expect.any(Number),
//                 forecast: expect.any(String),
//                 time: expect.any(String)
//             }]);
//             // it should have a status of 200
//             expect(response.statusCode).toBe(200);
//             // the callback has a 'done' that we can call to fix stuff :sparkle-emoji:
//             done();
//         });
// });