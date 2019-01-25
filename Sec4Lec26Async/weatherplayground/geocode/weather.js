const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/650bd7a306d04b42ce24ab1ab344c8bd/${lat},${lng}?lang=tr&units=si`,
        json: true,
        proxy: 'http://proxy.tnb.org:8080',
        strictSSL : false
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to forecast.io servers.');
        } else if(body.code === 400){
            callback(undefined, {
                temperature: body.error
            });
        }else if(response.statusCode === 403) {
            callback("Bad API.");
        }else if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else {
           callback('Unable to connect to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;