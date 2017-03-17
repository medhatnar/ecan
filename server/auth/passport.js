const jwt = require('jsonwebtoken');
const passport = require('passport'); 
const passportJWT = require('passport-jwt'); 
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt-node');
const request = require('request');
const User = require('../database/models/UserModel.js');


let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'vultureCulture';

const localStrategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
	console.log("PAYLOAD RECEIVED: ", jwt_payload);
	User.getUserByUsername(username)
	.then(payload => {
		if(payload) {
			next(null,user);
		} else {
			next(null,false);
		}
	});

});

passport.use(localStrategy);

let signin = (username,password,res) => {
	User.getUserByUsername(username)
	 .then(user => {
	 	if(!user) {
	 		res.status(401).json({message:"this user does not exist"});
	 	} else {
	 		
	 		if(username === user.name && password === user.pass) {
	 			let payload = {id:user.id}
	 			let token = jwt.sign(payload,jwtOptions.secretOrKey);

	 			res.json({message: "ok", token: token})
	 		} else {
	 			res.status(401).json({message:"invalid password"});
	 		}
	 	}

	});
}

module.exports = {
	localStrategy,
	signin
}