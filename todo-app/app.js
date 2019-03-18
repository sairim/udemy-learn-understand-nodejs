const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

// set up express and ejs
const app = express();
const port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.listen(port);

// connect to db
mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);