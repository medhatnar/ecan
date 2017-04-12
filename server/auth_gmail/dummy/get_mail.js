var fs = require('fs');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

function getOAuth2Client(cb) {
    // Load client secrets
    fs.readFile('client_secret.json', function(err, data) {
      if (err) {
        return cb(err);
      }
      var credentials = JSON.parse(data);
      var clientSecret = credentials.installed.client_secret;
      var clientId = credentials.installed.client_id;
      var redirectUrl = credentials.installed.redirect_uris[0];
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

      // Load credentials
      fs.readFile('gmail-credentials.json', function(err, token) {
        console.log("TOKE NE TOKEN ++++:", token)
        if (err) {
          return cb(err);
        } else {
          oauth2Client.credentials = JSON.parse(token);
          console.log("HELLLLOOOOOOOO O AUTH 2 CLIENT:", oauth2Client.credentials)
          return cb(null, oauth2Client);
        }
      });
    });
  }


function getMessage(auth, id) {
  
  var gmail = google.gmail('v1');
  gmail.users.messages.get({
    id: id,
    format: "full",
    auth: auth,
    userId: 'me',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var message = response;
    console.log("MESSAGE: ", message)
  });
}

function listMessages(auth, query) {
  var messages = [];

  var gmail = google.gmail('v1');
  gmail.users.messages.list({
    auth: auth,
    userId: 'me',
    maxResults: 25,
    labelIds: ['INBOX', 'CATEGORY_PERSONAL']
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var msgData = response.messages;
    var nextPageToken = response

    console.log(nextPageToken)

    // for each id i want to get a message
    // i want each message to give me back the 'from', 'to', 'subject', 'body', 'snippet', 'labels', 'content type', 
    getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
    msgData.map((data) => {

      getMessage(oauth2Client,data.id)
    
         });  
       }
    });
  });
}

  getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      listMessages(oauth2Client, function(err, results) {
        if (err) {
          console.log('err:', err);
        } else {
          console.log(results);
        }
      });
    }
  });