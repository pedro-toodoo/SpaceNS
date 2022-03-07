'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');
const Map = require('./map');

const Travel = database.define('travel', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    duration: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
    distance: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
    namePlanet: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    nameSpacecraft: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
}, {timestamps: false});//tempo de criação e update

Travel.hasOne(Map, {
    foreignKey: 'idTravel',    
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Travel;