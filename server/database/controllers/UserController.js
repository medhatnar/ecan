const Users = require('../models/UserModel.js');

module.exports = {
 //  signin: {
 //    get: (req, res) => {
      
 //    },
 //    post: (req, res) => {

 //  }
 // },
  signup: {
  get: (req,res) => {

    Users.signup.get(req.body.username, (err,results) => {
          console.log("WHAT RESULTS?????:", results);
        })
    
  },

  post: (req, res) => {

        let params = [req.body.username, req.body.password, req.body.email, 3];
        console.log("WHAT IS THE PARAMS: ", params);

        Users.signup.post(params, (err, results) => {
          console.log(results);
          if (err) { console.assert("USER NOT CREATED") }
          res.sendStatus(201);
        });
      }
    }
  }
};

