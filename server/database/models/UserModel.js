const db = require('../connection.js');
const query = require('../queries.js');

module.exports = {
  // signin: {

  // },

  signup: {
    get: (params,callback) => {

    db.query(query.checkIfUserExists(params),(err,results) => {

      console.log("THIS IS THE RESULT: ", results[0]['count(*)']);

        return results[0]['count(*)'];

    })

    },
    post: (params, callback) => {
      // create a user
      db.query(query.insertNewUser, params, (err, results) => {

        callback(err, results);
      });
    }
  }
};