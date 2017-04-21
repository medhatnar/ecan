const routerAPI = require('express').Router();
const Gauth = require('../auth_gmail/get_mail.js')
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');

routerAPI.post('/getMail',(req,res) => {
  console.log("GETTING MAIL")
		let gauth = req.body.gauth;

	Gauth.getOAuth2Client(gauth, function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      Gauth.listMessages(oauth2Client, function(err, results) {
        if (err) {
          console.log('err:', err);
        } else {
          console.log("FINAL OOOOOOOOOOOOOOOOOOUT PUT", results)
          return results;
        }
      }, res);
    }
  });
});

routerAPI.post('/getTemplate',(req, res) => {
  
})


module.exports = routerAPI;
