const knex = require('../connection.js');

let storeUser = (username, password, email,group) => {

checkIfUserExists(username)
.then(count => {
	console.log("COUNT",count);
		if(count) {

		console.log('That Username is already taken.');

		} else {

		return knex('users').insert({
		username:username,
		password:password,
		email:email,
		groups_id:group
		}).then(result => {
		console.log("New User ID:", result);

	 });
	}
  })
};

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

	 	console.log(result)
	 	let name = result[0][0]['username'];
	 	let pass = result[0][0]['password'];
	 	let id = result[0][0]['id'];

	 	return {name, pass, id};
	 });
 }

let checkUserPassword = (password) => {
	
};

let getUserID = (username) => {
	return knex.raw(`select id from users where username = '${username}' and email = '${email}'`)
			   .then(id => {
			   	console.log("ID",id);
			   });
}


module.exports = {
  storeUser,
  checkIfUserExists,
  getUserByUsername
};