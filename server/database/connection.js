const config = require('./config.js');
const knex = require('knex')({

  client: 'mysql',
  connection: { 
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    charset: config.charset
  },
  useNullasDefault: true
});

module.exports = knex;


