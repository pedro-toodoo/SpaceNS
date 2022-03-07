const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('spacens', 'user', 'toodoo', {
    dialect: 'sqlite',
    host: './database'
});

module.exports = sequelize;