const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/',(req, res) => {
    //res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Olgac',
        likes: [
            'Biking',
            'Movies'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) =>{
    res.send({
        errorMssage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});