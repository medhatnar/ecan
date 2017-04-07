var fs = require('fs');
var googleAuth = require('google-auth-library');
var GetToken = require('../database/models/UserModel.js')
function getOAuth2Client(cb) {
    // Load client secrets
    fs.readFile('client_secret.json', function(err, data) {
      if (err) {
        return cb(err);
      }
      var credentials = JSON.parse(data);
      var clientSecret = credentials.web.client_secret;
      var clientId = credentials.web.client_id;
      var redirectUrl = credentials.web.redirect_uris[0];
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

      // Load credentials
    
        
          var token =  GetToken.getGAuth(username);
          oauth2Client.credentials = JSON.parse(token);

          return cb(null, oauth2Client);
        
      
    });
  }



  function sendSampleMail(auth, cb) {
    var gmailClass = google.gmail('v1');

    var email_lines = [];

    email_lines.push('From: "test" <pcarion@gmail.com>');
    email_lines.push('To: pcarion@gmail.com');
    email_lines.push('Content-type: text/html;charset=iso-8859-1');
    email_lines.push('MIME-Version: 1.0');
    email_lines.push('Subject: this would be the subject');
    email_lines.push('');
    email_lines.push('And this would be the content.<br/>');
    email_lines.push('The body is in HTML so <b>we could even use bold</b>');

    var email = email_lines.join('\r\n').trim();

    var base64EncodedEmail = new Buffer(email).toString('base64');
    base64EncodedEmail = base64EncodedEmail.replace(/\+/g, '-').replace(/\//g, '_');

    gmailClass.users.messages.send({
      auth: auth,
      userId: 'me',
      resource: {
        raw: base64EncodedEmail
      }
    }, cb);
  }

  function sendMessage(userId, email, callback) {
  // Using the js-base64 library for encoding:
  // https://www.npmjs.com/package/js-base64
  var base64EncodedEmail = Base64.encodeURI(email);
  var request = gapi.client.gmail.users.messages.send({
    'userId': userId,
    'resource': {
      'raw': base64EncodedEmail
    }
  });
  request.execute(callback);
}

  getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      sendSampleMail(oauth2Client, function(err, results) {
        if (err) {
          console.log('err:', err);
        } else {
          console.log(results);
        }
      });
    }
  });