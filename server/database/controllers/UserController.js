const path = require('path');
const request = require('request');
const user = require('../models/UserModel.js');
const auth = require('../../auth/auth.js');

let newUserSignup = (req,res) => {
 	auth.signup(req.body.username,req.body.password,req.body.email,req,res);
}

let userLogin = (req,res) => {

	let username = req.body.username;
	let password = req.body.password;

	auth.signin(username,password,res);
}

let getUser = (req, res) => {

	let username = req.body.user
	let inputToken = req.body.token
	
	console.log("WHAT IT DO", user.getGAuth(username, res));
}


module.exports = {
 newUserSignup,
 userLogin,
 getUser
};