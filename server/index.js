require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const morgan = require('morgan');
const passport = require('passport');
const authRouter = require('./routes/authRoutes.js');
const router = require('./routes/serviceRoutes.js');
const cookieParser = require('cookie-parser');
const connection = require('./database/connection.js');
const Auth = require('./auth/auth.js');
const flash = require('connect-flash');
const app = express();


app.use(morgan('dev'));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(flash());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req,res) => {

	console.log("root reached")

})

// app.use(checkToken);

app.use('/',authRouter);
app.use('/api',router);

const port = process.env.PORT || 3006;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});


module.exports = app;

