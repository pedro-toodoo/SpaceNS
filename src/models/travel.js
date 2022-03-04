'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');

const Travel = database.define('travel', {
    id: {
        type: Sequelize.INTEGER,
        AutoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
    name_planet: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    duration: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
    distance: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
    spacecraft: {
        type: Sequelize.STRING,
        allowNull: false, 
    }
}, {timestamps: false, underscored: true});//tempo de criação e update

module.exports = Travel;