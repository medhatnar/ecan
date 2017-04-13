var fs = require('fs');
var base64 = require('base-64');
var utf8 = require('utf8');
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
        if (err) {
          return cb(err);
        } else {
          oauth2Client.credentials = JSON.parse(token);
          return cb(null, oauth2Client);
        }
      });
    });
  }


function getMessage(auth, id, cb) {
  var gmail = google.gmail('v1');
  gmail.users.messages.get({
    id: id,
    auth: auth,
    userId: 'me',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
    }
      cb(null, response);
  
  });
}


function decodeFromBase64(input) {
  input = input.replace(/\s/g, '');
    return new Buffer(input , 'base64').toString();
}

function listMessages(auth, query, cb) {
  var messageData;

  var gmail = google.gmail('v1');
  gmail.users.messages.list({
    auth: auth,
    format:'full',
    userId: 'me',
    maxResults: 25,
    labelIds: ['INBOX', 'CATEGORY_PERSONAL', 'IMPORTANT', 'STARRED']
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var msgData = response.messages;
    // var nextPageToken = response

    // console.log("nxt page",nextPageToken)
      console.log(msgData[0].id)

    // for each id i want to get a message
    // i want each message to give me back the 'from', 'to', 'subject', 'body', 'snippet', 'labels', 'content type', 
    getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
     return getMessage(oauth2Client, msgData[0].id, function(err, results) {
          if (err) {
            console.log('err:', err);
          } else {

              var emailBody = decodeFromBase64(results.payload.parts[0].body.data);
              console.log(emailBody)
            //console.log(results.payload.parts[0].partId)
            
            return results;

          }
        }); 
       }
    });
  });
  console.log("DA DATA", messageData);
}



  getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      listMessages(oauth2Client, function(err, results) {
        if (err) {
          console.log('err:', err);
        } else {
          // console.log("RESULT", results);
        }
      });
    }
  });