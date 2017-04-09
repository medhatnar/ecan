const knex = require('../connection.js');

let storeUser = (username, password, email,group) => {
		return knex('users').insert({
		username:username.trim(),
		password:password.trim(),
		email:email.trim(),
		groups_id:group
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
			   	console.log("NEKOT:",token)
			   })
}

let getGAuth = (username) => {
	return knex.raw(`select gauth from users where username = '${username}'`)
			   .then(token => {
			   	console.log("GAUTH: ",token);
			   	return token;
			   })
}

let storeGAuth = (username, token) => {
	return knex.raw(`update users set gauth = '${token}' where username = ${username}`)
			   .then(res => {
			   	console.log(res)
			   })
}

let storeToken = (username,token) => {
	return knex.raw(`update users set token = '${token}' where username = ${username}`)
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