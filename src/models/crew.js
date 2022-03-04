'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');


const Crew = database.define('crew', {
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
    specialization: {
        type: Sequelize.STRING,
        allowNull: false, 
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
    },
    email_supervisor: {
        type: Sequelize.STRING,
        allowNull: false, 
    }

}, {timestamps: false, underscored: true});//tempo de criação e update


module.exports = Crew;