require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../database/models/UserModel.js');
const bcrypt = require('bcrypt');

let signin = (username,password,res) => {
	User.getUserByUsername(username)
	 .then(user => {
		
	 	if(!user) {

	 		 res.json({ success: false, message: `Authentication failed. User ${username} not found.`});

	 	} else {
	 		
		return bcrypt.compare(password,user.pass)
			  .then(success => {
			  	if(success) {
	 			let payload = {id:user.id}
	 			let token = jwt.sign(payload, process.env.secret, {expiresIn : "1d"});	

	 			User.storeToken(username,token)

				res.json({ success: true, message: 'Ok!', token}); 

				} else {

					res.json({message:"Invalid username or password."}); 
				}
	 	});					
	}
 });
}



let signup = (username, password, email, req, res) => {

User.checkIfUserExists(username)
	.then(count => {
		
		if(count) {

		return res.json({message: "Username is taken."});

		} else {

		bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(password, salt, function(err, hash) {
	        	if(err) throw err;
	        	let pass = hash;

	        	User.storeUser(username, pass, email, 3, null, null)
	        		.then(id => {
	        		let payload = {id}
	 				let token = jwt.sign(payload, process.env.secret, {expiresIn : "10d"});
	 				User.storeToken(username,token)
	 				res.json({username,token});
	 			});
			});
		});
	}
 });
}


module.exports = {
	signin,
	signup
}
