const Sequelize = require('sequelize');

const connection = new Sequelize('ask_generic','root','Moraes098',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection;