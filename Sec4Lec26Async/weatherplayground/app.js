const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./geocode/weather.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else {
        weather.getWeather(results.lat,results.lng, (errorMessage, weatherResults) => {
            if (errorMessage){
                console.log(errorMessage);
            } else {
                //console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`it's currently ${weatherResults.temperature}. it feels like ${weatherResults.apparentTemperature} !!`)
            }
        });
    }
});

