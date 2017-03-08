const db = require('../connection.js');
const query = require('../queries.js');

module.exports = {
  // signin: {

  // },

  signup: {
    get: (params,callback) => {

    db.query(query.checkIfUserExists(params),(err,results) => {

        console.log("ERROR:",err,"RESULTS:",results);

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