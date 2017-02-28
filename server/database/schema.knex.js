const config = require('./config');
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


