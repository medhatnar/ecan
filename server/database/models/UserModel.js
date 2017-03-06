var db = require('../connection.js');

module.exports = {

    post: function (params, callback) {
      // create a user
      console.log("PARAMS IN model: ",params);

      var queryStr = 'insert into events_manager.users(`username`, `password`, `email`, `groups_id`) values (?, ?, ?, ?)';
      console.log("QUERY DAT STRANGER THINGS!!:", queryStr);

      db.query(queryStr, params, function(err, results) {
        console.log("err & results", err,results);
        callback(err, results);
    });
  }
};