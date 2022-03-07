'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');

const Passenger = database.define('passenger', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    birthDate: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: true, 
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    nameSpacecraft: {
        type: Sequelize.STRING,
        allowNull: false, 
    }
}, {timestamps: false});//tempo de criação e update

module.exports = Passenger;