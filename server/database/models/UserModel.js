var db = require('../connection.js');

module.exports = {

    post: function (params, callback) {
      // create a user
      console.log("WHAT THE PARAMS THOOOOOO: ", params);

      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
    });
  }
};