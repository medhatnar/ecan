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
        if (err) {
          return cb(err);
        } else {
          oauth2Client.credentials = JSON.parse(token);
          return cb(null, oauth2Client);
        }
      });
    });
  }

function listMessages(auth,userId, callback) {

var gmailClass = google.gmail('v1');
var request = gmailClass.users.messages.list({
    'auth': auth,
    'userId': 'me',
    'labelIds': 'INBOX',
    'maxResults': 25,
    'key':'AIzaSyBA9yzhZ88Bpv3Epwyj9Rg1ND9SWTnrSj8'
  });
console.log("REAQUESTA: ",request)
  var getPageOfMessages = function(request, result) {
    
    request.execute(function(resp) {

      result = result.concat(resp.messages);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gmailClass.users.messages.list({
          'auth': auth,
          'userId': userId,
          'maxResults': 25,
          'pageToken': nextPageToken,
          'key':'AIzaSyBA9yzhZ88Bpv3Epwyj9Rg1ND9SWTnrSj8'
        });
        getPageOfMessages(request, result);
      } else {
        callback(result);
      }

    });
  };

  var initialRequest = gmailClass.users.messages.list({
    'auth':auth,
    'userId': userId,
    'maxResults': 25,
    'key':'AIzaSyBA9yzhZ88Bpv3Epwyj9Rg1ND9SWTnrSj8'
  });
  getPageOfMessages(initialRequest, []);
}

  getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      listMessages(oauth2Client,'narminshahin@gmail.com', function(err, results) {
        if (err) {
          console.log('err:', err);
        } else {
          console.log(results);
        }
      });
    }
  });