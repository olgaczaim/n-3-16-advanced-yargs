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

axios.get(geoCodeUrl, {
    proxy:{
     host: 'http://proxy.tnb.org',
     port: 8080
    },
}).then((response) => {
    console.log(response.data);
});
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
