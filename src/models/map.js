'use strict';

const Sequelize = require('sequelize');
const database = require('../configsqlite');

const Map = database.define('map', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    scale: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    orientation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    obstacles: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    idTravel: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {timestamps: false});

module.exports = Map;