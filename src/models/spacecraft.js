'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');
const Crew = require('./crew');
const Passenger = require('./passenger');
const Travel = require('./travel');

const Spacecraft = database.define('spacecraft', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
        primaryKey: true
    },
    numCrew: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
    numPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    }
}, {timestamps: false}); //tempo de criação e update

Spacecraft.hasOne(Crew, {
    foreignKey: 'nameSpacecraft',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Spacecraft.hasOne(Passenger, {
    foreignKey: 'nameSpacecraft',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Spacecraft.hasMany(Travel, {
    foreignKey: 'nameSpacecraft',
    onDelete:  'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Spacecraft;