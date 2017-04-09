var fs = require('fs');
var googleAuth = require('google-auth-library');
var path = require('path')

  var scopes = require('./scopes');

  function getAuthorizationUrl(cb) {
      
      var clientSecret = "aC1JckCPCKceQQM44uYK5hJJ";

      var clientId = "793576664582-ijlkcg6tegha3hc4mbva1ujchr6khchd.apps.googleusercontent.com";
      var redirectUrl = "http://localhost:3006/auth/callback/gauth"
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

      var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
      });
      
      console.log("THIS IS THE AUTHURL: ",authUrl);
       return authUrl;
  }


module.exports = {
  getAuthorizationUrl
}