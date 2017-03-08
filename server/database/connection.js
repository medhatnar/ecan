const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'fedora-nyc1.laulabs.net',
  user     : 'narmin',
  password : 'narmin123',
  database : 'events_manager',
  port: 3306
});

connection.connect();

module.exports = connection;