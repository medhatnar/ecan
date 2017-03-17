const router = require('express').Router();
const path = require('path')
const bcrypt= require('bcrypt-node');
const request = require('request');
const auth = require('../../auth/passport.js');
const model = require('../models/UserModel.js');

let newUserSignup = (req,res) => {
 	model.storeUser(req.body.username,req.body.password,req.body.email,3);
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