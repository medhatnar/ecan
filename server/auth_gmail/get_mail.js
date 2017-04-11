require('dotenv').config();
var fs = require('fs');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

function listLabels(userId, callback) {
  var request = gapi.client.gmail.users.labels.list({
    'userId': userId
  });
  request.execute(function(resp) {
    var labels = resp.labels;
    callback(labels);
  });
}

module.exports = {
  listLabels
}