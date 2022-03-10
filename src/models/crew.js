'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');

const Crew = database.define('crew', {
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
    nameSpacecraft: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    emailSupervisor: {
        type: Sequelize.STRING,
        allowNull: true, 
    }
}, {timestamps: false});//tempo de criação e update

Crew.hasOne(Crew, {
    foreignKey: 'emailSupervisor',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Crew;