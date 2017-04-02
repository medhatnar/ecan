const path = require('path');
const request = require('request');
const auth = require('../../auth/auth.js');

let newUserSignup = (req,res) => {
 	auth.signup(req.body.username,req.body.password,req.body.email,req,res);
}

let userLogin = (req,res) => {
	let username = req.body.username;
	let password = req.body.password;

	auth.signin(username,password,res);
}


module.exports = {
 newUserSignup,
 userLogin
};