const knex = require('../connection.js');

let storeUser = (username, password, email,group) => {

checkIfUserExists(username)
.then(count => {
		if(count > 0) {

		console.log('That Username is already taken.');

		} else {

		return knex('users')

		.insert({
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
	return knex.raw(`select count(*) from users where username = '${username}'`).
	then(result => {
		return result[1][0].length;
	});

}

module.exports = {
  storeUser: storeUser
}