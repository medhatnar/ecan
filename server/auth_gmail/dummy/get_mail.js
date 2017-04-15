var fs = require('fs');
var base64 = require('base-64');
var utf8 = require('utf8');
var async = require('async');
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

var counter = 0;

function decodeFromBase64(input) {
  input = input.replace(/\s/g, '');
    return new Buffer(input , 'base64').toString();
}

function myFilter(collection) {
    var newArr = [];
    collection.forEach(function(val) {
      console.log(counter++, val.name)
      var obj = {};
      if(val.name === "From" ||
         val.name === "Subject" || 
         val.name === "Date"  ||
         val.name === "To" ||
         val.name === "Message-ID") { 
        console.log("MADE IT", val)
          obj[val.name] = val.value
          console.log("OBJECYYYYYYYYYYYYYYYYY: ",obj)
        newArr.push(obj)
      }
    })
    return newArr
};

function listMessages(auth, cb) {

  var gmail = google.gmail('v1');

  function getResult(array) {
    async.map
  }

  gmail.users.messages.list({
    auth: auth,
    format:'full',
    userId: 'me',
    maxResults: 25,
    labelIds: ['INBOX', 'CATEGORY_PERSONAL']
  }, 

  function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var msgData = response.messages;

    async.map(msgData, function(msg, callback) {

              gmail.users.messages.get({
              id: msg.id,
              auth: auth,
              userId: 'me'
              }, function(err,res) {
                    if(err) console.log(err);
                    callback(err, res)
                   })
            },
             function(err, result) {
              if(err) console.log("THIS IS THE ERROR: ", err);

              var filteredData = result.map(function(msg) {
                 return myFilter(msg.payload.headers)
               })

                console.log("DONE", filteredData)
                
             })

      })
}

  getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      listMessages(oauth2Client, function(err, results) {
        if (err) {
          console.log('err:', err);
        } else {
          console.log("FINAL OOOOOOOOOOOOOOOOOOUT PUT", results)
          return results;
        }
      });
    }
  });