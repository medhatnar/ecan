require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var request = require('request')
var morgan = require('morgan');
var router = require('./routes.js')
var session = require('express-session');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser');
var app = express();
var userModel = require('./user/userModel.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(session({secret: 'seekrit'}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client')));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(session({
  secret:"someSecret",
  resave: true,
  saveUninitialized: true
}));


var port = process.env.PORT || 2000;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});
module.exports = app;