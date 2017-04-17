require('dotenv').config();
var fs = require('fs');
var googleAuth = require('google-auth-library');
var path = require('path')

  var scopes = require('./scopes');
require('dotenv').config();

  function getAuthorizationUrl(cb, username) {
      
      var clientSecret = process.env.secreto
      var clientId = process.env.id
      var redirectUrl = process.env.redirect
      var javascriptOrigins = process.env.origins
      console.log("RU", redirectUrl);
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl, javascriptOrigins);

      var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        state: {username : username}
      });
      

       return authUrl;
  }


module.exports = {
  getAuthorizationUrl
}