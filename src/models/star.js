'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');
const Planet = require('./planet')

const Star = database.define('star', {
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
    galaxy: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    luminosity: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
    },
}, {timestamps: false});//tempo de criação e update

Star.hasMany(Planet, {
    foreignKey: 'star',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Star;