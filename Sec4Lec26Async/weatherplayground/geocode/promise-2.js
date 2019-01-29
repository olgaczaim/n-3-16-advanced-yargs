const request= require('request');

var geocodeAddress = (address) => {
    return new Promise((res, rej) => {
        var address = encodeURIComponent(address);
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=pAENXEQxk0fFTaRsILYPWQrpe0FsImmX&location=${address}`,
            json: true
            //proxy: 'http://proxy.tnb.org:8080'
        }, (error, response, body) => {
            if (error){
                rej('Unable to connect to service');
            } else {
                res({
                    lat: body.results[0].locations[0].latLng.lat,
                    lng: body.results[0].locations[0].latLng.lng,
                });
            }
        });
    });
};

geocodeAddress('ankara').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (err) => {
   console.log(err);
});