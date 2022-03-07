'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');
const Travel = require('./travel');

const Planet = database.define('planet', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
        primaryKey: true
    },
    mass: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
    size: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
    star: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    habitable: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {timestamps: false}); //tempo de criação e update

Planet.hasMany(Travel, {
    foreignKey: 'namePlanet',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Planet;