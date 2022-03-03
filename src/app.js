'use strict';

const express = require('express');
const bodyParser = require('body-parser'); //converte para JSON
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//conecta com o BD
mongoose.connect(config.connectionString);

//carrega models
const Passenger = require('./models/passenger');
const Crew = require('./models/crew');
const Planet = require('./models/planet');
const Star = require('./models/star');

//carrega rotas
const indexRoute = require('./routes/index');
const passengerRoute = require('./routes/passenger-routes');
const crewRoute = require('./routes/crew-routes');
const planetRoute = require('./routes/planet-routes');
const starRoute = require('./routes/star-routes');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');  
    next();
})

app.use('/', indexRoute);
app.use('/passengers', passengerRoute);
app.use('/crew', crewRoute);
app.use('/planets', planetRoute);
app.use('/stars', starRoute);

module.exports = app;