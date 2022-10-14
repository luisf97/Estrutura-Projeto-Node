const Sequelize = require('sequelize')

// Colocar as credenciais do mysql
const connection = new Sequelize('usersdb', 'admin', 'Dev@312H', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;