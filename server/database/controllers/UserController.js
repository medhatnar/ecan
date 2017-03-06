var Users = require('../models/UserModel.js');

module.exports = {
    get: function (req, res) {
      Users.get(function(err, results) {
        if (err) {  console.assert("USER NOT CREATED") }
        res.json(results);
      });
    },
    post: function (req, res) {

      var params = [req.body.username, req.body.password, req.body.email, 3];
      console.log("WHAT IS THE PARAMS: ", params);

      Users.post(params, function(err, results) {
        if (err) { console.assert("USER NOT CREATED") }
        res.sendStatus(201);
    });
  }
};

