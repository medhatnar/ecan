require('dotenv').config();
var fs = require('fs');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var GToken = require('../database/models/UserModel.js');


  function getAuthorizationToken(code, res) {
    
      var clientSecret = process.env.secreto
      var clientId = process.env.id
      var redirectUrl = process.env.redirect
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

       oauth2Client.getToken(code, function(err, token) {
        if(err) console.log(err)

        var toke = JSON.stringify(token);

        oauth2Client.setCredentials({
        access_token: token.access_token,
        refresh_token: token.refresh_token,
        expiry_date: false
          });

        function getUserInfo(auth) {
           var gmail = google.gmail('v1');
              gmail.users.getProfile({
               auth: auth,
                userId: 'me',
             }, 
             function(err,res) {
              if(err) console.log("ERROR:", err);

                GToken.storeGAuth(res.emailAddress, toke);
             })
          }

          getUserInfo(oauth2Client)

        res.redirect("/")
      });
   
  }

module.exports = {
  getAuthorizationToken
}