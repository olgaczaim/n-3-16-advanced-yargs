const request = require('request');

var geocode = (address, callback) => {
    var address = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=pAENXEQxk0fFTaRsILYPWQrpe0FsImmX&location=${address}`,
        json: true,
        proxy: 'http://proxy.tnb.org:8080'
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to service');
        } else {
            callback(undefined, {
                lat: body.results[0].locations[0].latLng.lat,
                lng: body.results[0].locations[0].latLng.lng,
            });
        }
    });
};

module.exports.geocodeAddress = geocode;