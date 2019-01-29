const yargs = require('yargs');
const axios = require('axios');

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

var address = encodeURIComponent(argv.address);
var geoCodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=pAENXEQxk0fFTaRsILYPWQrpe0FsImmX&location=${address}`;

axios.get(geoCodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS'){
        throw new ERROR('Unable to find that address');
    }
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng =  response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/650bd7a306d04b42ce24ab1ab344c8bd/${lat},${lng}?lang=tr&units=si`;
    return axios.get(weatherUrl);
    //console.log(response.data.results[0].locations[0].mapUrl);
}).then((response) => {
    var temp = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temp} and it feels like ${apparentTemp}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
    }else{
        console.log(e.message);
    }
});

//
//axios.get(geoCodeUrl, {
//    proxy:{
//     host: 'http://proxy.tnb.org',
//     port: 8080
//    },
//}).then((response) => {
//    console.log(response.data);
//});
//or
//const inst = axios.create({
//    proxy: {
//        host: 'http://proxy.tnb.org',
//        port: 8080
//    }
//});
//
//inst.get(geoCodeUrl).then((response) => {
//    console.log(response.data);
//});
