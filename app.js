require('dotenv').config();
const express = require('express');
const app = express();
// const weather = require('./data/darksky.json');
// const geoData = require('./data/geo.json');
const cors = require('cors');
const request = require('superagent');

app.use(cors());

app.get('/', (req, res) => res.send('Hi!'));

// initialize the global state of lat and lng so it is accessible in other routes
let lat;
let lng;

app.get('/location', async(req, res, next) => {
    try {
    // ins www.cool-api.com?search=portland, `location` will be portland
        const location = req.query.search;
        const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODE_API_KEY}&q=${location}&format=json`;

        const cityData = await request.get(URL);

        const firstResult = cityData.body[0];
        
        // console.log(locationData.body);
        console.log('using location . . .', location);
        // const cityData = geoData.results[0];

        lat = firstResult.lat;
        lng = firstResult.lon;
        // console.log(req.query);
        res.json({
            formatted_query: firstResult.display_name,
            lat: lat,
            lng: lng
        });
    } catch (err) {
        next(err);
    }
});

const getWeatherData = async(lat, lng) => {
    const weather = await request.get(`https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${lng}`);

    return weather.body.daily.data.map(forecast => {
        return {
            forecast: forecast.summary,
            time: new Date(forecast.time * 1000),
        };
    });
};


app.get('/weather', async(req, res) => {
    // use the lat and lon from earlier to get the weather data for the selected area
    try {
        const portlandWeather = await getWeatherData(lat, lng);

        // res.json that weather data in the appropriate form
        res.json(portlandWeather);
    } catch (err) {
        // next(err);
    }
});

app.get('/yelp', async(req, res, next) => {
    try {
        const yelpStuff = await request
            .get(`https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${lng}`)
            .set('Authorization', `Bearer ${process.env.YELP_API_KEY}`);
        const yelpObject = yelpStuff.body;
        const yelpBusinesses = yelpObject.businesses;
        const yelpMap = yelpBusinesses.map(business => {
            return {
                name: business.name,
                image_url: business.image_url,
                price: business.price,
                rating: business.rating,
                url: business.url
            };
        });
        res.json(yelpMap);
    } catch (err) {
        next(err);
    }
});

app.get('*', (req, res) => {
    res.send({
        uhOh: '404'
    });
});

module.exports = {
    app: app,
};


