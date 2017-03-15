require('dotenv').config(); 
const passport = require('passport');  
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const morgan = require('morgan');
const router = require('./routes.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connection = require('./database/connection.js');
const app = express();


app.use(morgan('dev'));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client')));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(router);

app.get('/', function(req, res) {  
  res.send('Relax. We will put the home page here later.');
});


const port = process.env.PORT || 3306;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});
module.exports = app;

