import { Sequelize } from 'sequelize'
const databaseConfig = require('@config/database')

const connection = new Sequelize(databaseConfig)

module.exports = connection
