const Users = require('../models/UserModel.js');

module.exports = {
 //  signin: {
 //    get: (req, res) => {
      
 //    },
 //    post: (req, res) => {

 //  }
 // },
  signup: {

  post: (req, res) => {

        if(Users.signup.get(req.body.username) > 0) {
          console.log("This username is taken");
  
        } else {

        let params = [req.body.username, req.body.password, req.body.email, 3];
        console.log("WHAT IS THE PARAMS: ", params);

        Users.signup.post(params, (err, results) => {
          if (err) { console.assert("USER NOT CREATED") }
          res.sendStatus(201);
        });
      }
    }
  }
};

