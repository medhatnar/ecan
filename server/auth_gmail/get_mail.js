require('dotenv').config();
var fs = require('fs');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var base64 = require('base-64');
var utf8 = require('utf8');
var async = require('async');
var indexOf = require('lodash.indexof');


function getOAuth2Client(token, cb) {
    // Load client secrets
	  var clientSecret = process.env.secreto
      var clientId = process.env.id
      var redirectUrl = process.env.redirect
      var auth = new googleAuth();
      var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);


      // Load credentials
          oauth2Client.credentials = JSON.parse(token);
          return cb(null, oauth2Client);
       

  }


function decodeFromBase64(input) {
  input = input.replace(/\s/g, '');
    return new Buffer(input , 'base64').toString();
}

function myFilter(collection) {

    var obj = {};
    collection.forEach(function(val) {
      if(val.name === "From" ||
         val.name === "Subject" || 
         val.name === "Date"  ||
         val.name === "To" ||
         val.name === "Message-ID") { 
          obj[val.name] = val.value
      }
    })
    return obj
};

function listMessages(auth, cb, res) {

  var gmail = google.gmail('v1');


  gmail.users.messages.list({
    auth: auth,
    format:'full',
    userId: 'me',
    maxResults: 35,
    labelIds: ['INBOX', 'CATEGORY_PERSONAL']
  }, 

  function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var msgData = response.messages;

    let s = new Set()
    console.log("CAUSE LOVING YOU IS", msgData.length)
    msgData.forEach((pair, i) => {
      if(!s.has(pair.threadId)) {
        s.add(pair.threadId)
      } else {
        msgData.splice(i,1);
      }
    })

    console.log("EASY", msgData.length)

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

                res.send(filteredData);
                
             })

      })
}

module.exports = {
	getOAuth2Client,
	listMessages
}