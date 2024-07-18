const knex = require('knex');
const knexConfig = require('../knexfile');

const enviroment = process.env.ENVIRONMENT || 'development';

const config = knexConfig[enviroment];

module.exports = knex(config);