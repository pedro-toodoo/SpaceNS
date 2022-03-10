'use strict';

const express = require('express');
const bodyParser = require('body-parser'); //converte para JSON
const configsqlite = require('./configsqlite');

configsqlite.sync();

const app = express();

//carrega models
const Customer = require('./models/customer');
const Passenger = require('./models/passenger');
const Crew = require('./models/crew');
const Planet = require('./models/planet');
const Star = require('./models/star');
const Travel = require('./models/travel');
const Map = require('./models/map');
const Spacecraft = require('./models/spacecraft');

//carrega rotas
const indexRoute = require('./routes/index');
const passengerRoute = require('./routes/passenger-routes');
const crewRoute = require('./routes/crew-routes');
const planetRoute = require('./routes/planet-routes');
const starRoute = require('./routes/star-routes');
const travelRoute = require('./routes/travel-routes');
const mapRoute = require('./routes/map-routes');
const spacecraftRoute = require('./routes/spacecraft-routes');
const customerRoute = require('./routes/customer-routes');
const apiRoute = require('./api/consume');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');  
    next();
});

app.use('/', indexRoute);
app.use('/passengers', passengerRoute);
app.use('/crew', crewRoute);
app.use('/planets', planetRoute);
app.use('/stars', starRoute);
app.use('/travels', travelRoute);
app.use('/maps', mapRoute);
app.use('/spacecrafts', spacecraftRoute);
app.use('/customers', customerRoute);
app.use('/api', apiRoute);

module.exports = app;