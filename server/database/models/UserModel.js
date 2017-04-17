const knex = require('../connection.js');

let storeUser = (username, password, email, group, token, gauth) => {
		return knex('users').insert({
		username:username.trim(),
		password:password.trim(),
		email:email.trim(),
		groups_id:group,
		token: token,
		gauth: gauth
		}).then(result => {

		return result[0];
	});
}


let checkIfUserExists = (username) => {
	return knex.raw(`select count(*) from users where username = '${username}'`)
	.then(result => {
		return result[0][0]['count(*)'];
	});
};

let getUserByUsername = (username) => {
	console.log(username)
	return knex.raw(`select * from users where username = '${username}'`)
	 .then(result => {
	 
	 	if(!result[0].length) return;

	 	let name = result[0][0]['username'];
	 	let pass = result[0][0]['password'];
	 	let id = result[0][0]['id'];

	 	return {name, pass, id};
	 });
 }

let checkUserPassword = (password) => {
	
};

let getUserToken = (username) => {
	return knex.raw(`select token from users where username = '${username}'`)
			   .then(token => {
			   		return token
			   })
}

let getGAuth = (username, res) => {
	return knex.raw(`select gauth from users where username = '${username}'`)
			   .then(token => {
				console.log("EREHEREEEEE TOKEN: ", token)
			   	res.send(token[0][0].gauth);

			   })
}

let storeGAuth = (email, token) => {
	return knex.raw(`update users set gauth = '${token}' where email = '${email}'`)
			   .then(res => {
			   	console.log("TOKEN TO BE STORED IN GAUTH COLUMN: ", token)
			   	console.log("G AUTH STORED YES!", res)
			   })
}

let storeToken = (username,token) => {
	return knex.raw(`update users set token = '${token}' where username = '${username}'`)
			   .then(res => {
			   	console.log("NEKOT:",res)
		})
}


let getUserID = (username) => {
	return knex.raw(`select id from users where username = '${username}' and email = '${email}'`)
			   .then(id => {
			   	console.log("ID",id);
			});
}


module.exports = {
  storeUser,
  checkIfUserExists,
  getUserByUsername,
  getUserToken,
  storeToken,
  getGAuth,
  storeGAuth,
  getUserID
};