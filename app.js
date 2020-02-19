const express = require('express');
const app = express();
// const request = require('superagent');

const darkSkyData = require('./data/darksky.json');

const geoData = require('./data/geo.json');
const geoParse = geoData[0];

// console.log(geoData[0].display_name);


app.get('/location/:lat/:lon/', (req, res) => {
    res.json({
        search_query: 'whatever',
        formatted_query: 'other-thing',
        location_name: geoParse.display_name,
        lat: geoParse.lat,
        lon: geoParse.lon
    });
});

// console.log(darkSkyData.currently.summary);

app.get('/weather/:lat/:lon/', (req, res) => {
    res.json([
        {
            lat: darkSkyData.latitude,
            lon: darkSkyData.longitude,
            forecast: darkSkyData.currently.summary,
            time: dateString
        }
    ]);
});


let theDate = new Date(darkSkyData.currently.time * 1000);
let dateString = theDate.toUTCString();

// console.log(dateString);

app.get('*', (req, res) => {
    res.send({
        uhOh: '404'
    });
});

// app.listen(3000, () => { console.log('running . . .')});

module.exports = {
    app: app,
};


