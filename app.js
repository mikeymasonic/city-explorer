const express = require('express');
const app = express();
const weather = require('./data/darksky.json');
const geoData = require('./data/geo.json');
const cors = require('cors');

let lat;
let lon;

app.use(cors());

app.get('/', (request, respond) => respond.send('Hi!'));

app.get('/location/', (req, res) => {
    // ins www.cool-api.com?search=portland, `location` will be portland
    const location = req.query.search;

    console.log('using location . . .', location);
    const cityData = geoData.results[0];

    lat = cityData.geometry.location.lat;
    lon = cityData.geometry.location.lng;
    // console.log(req.query);
    res.json({
        name: req.query.name,
        formatted_query: cityData.formatted_address,
        lat: cityData.geometry.location.lat,
        lon: cityData.geometry.location.lon
    });
});

const getWeatherData = (lat, lon) => {
    return weather.daily.data.map(forecast => {
        return {
            forecast: forecast.summary,
            time: new Date(forecast.time * 1000),
        };
    });
};


app.get('/weather', (req, res) => {
    // use the lat and lon from earlier to get the weather data for the selected area
    const portlandWeather = getWeatherData(lat, lon);
    // res.json that weather data in the appropriate form
    res.json(portlandWeather);
});

// let theDate = new Date(weather.currently.time * 1000);
// let dateString = theDate.toUTCString();

app.get('*', (req, res) => {
    res.send({
        uhOh: '404'
    });
});

module.exports = {
    app: app,
};


