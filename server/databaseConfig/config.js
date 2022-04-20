const databaseConfig = require('./databaseConfig.json');



const knex = require('knex')({
  client: 'pg',
  connection: {
    host : databaseConfig.dev_host,
    port : databaseConfig.port,
    user : databaseConfig.user,
    password : databaseConfig.password,
    database : databaseConfig.database_name
  }
});

module.exports = knex;