const model = require('../models/UserModel.js');

let newUserSignup = (req,res) => {
 model.storeUser(req.body.username,req.body.password,req.body.email,3);
}


module.exports = {
 newUserSignup: newUserSignup
};