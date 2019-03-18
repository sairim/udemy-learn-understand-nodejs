const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log(`Request url: ${req.url}`);
    next();
});

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname); 
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the json data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname); 
});

app.listen(port);

