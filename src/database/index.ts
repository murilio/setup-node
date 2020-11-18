import { Sequelize } from 'sequelize'
const databaseConfig = require('@config/database')

export const sequelize = new Sequelize(databaseConfig)
