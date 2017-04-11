require('dotenv').config();
var fs = require('fs');
var googleAuth = require('google-auth-library');
var GToken = require('../database/models/UserModel.js');


  function getAuthorizationToken(code, cb) {
    
      var clientSecret = process.env.secreto
      var clientId = process.env.id
      var redirectUrl = process.env.redirect
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

       oauth2Client.getToken(code, function(err, token) {
        if(err) console.log(err)


        var toke = JSON.stringify(token)

          
        return toke;
      });
   
  }

module.exports = {
  getAuthorizationToken
}