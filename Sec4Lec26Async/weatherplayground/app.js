const request = require('request');

request({
    url:'http://www.mapquestapi.com/geocoding/v1/address?key=pAENXEQxk0fFTaRsILYPWQrpe0FsImmX&location=ankara%20t%C3%BCrkiye',
    json: true,
    proxy: 'http://proxy.tnb.org:8080'
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
    console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
    console.log(body.results[0].locations[0].latLng.lng);
});

//The latitude is stored on the response body here: body.results[0].locations[0].latLng.lat
//
//The longitude is stored on the response body here: body.results[0].locations[0].latLng.lng