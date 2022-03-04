'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');


const Passenger = database.define('passenger', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    birth_date: {
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
    spacecraft: {
        type: Sequelize.STRING,
        allowNull: false, 
    }
}, {timestamps: false, underscored: true});//tempo de criação e update


module.exports = Passenger;