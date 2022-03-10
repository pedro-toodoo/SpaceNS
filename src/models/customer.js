'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');

const Customer = database.define('customer', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    roles: [{
        type: Sequelize.STRING,
        allowNull: false, 
        enum: ['user', 'admin'],
        default: 'user'
    }]
});

module.exports = Customer;