const router = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');
// const GetToken = require('../../auth_gmail/get_token.js')

router.post('/login', UserController.userLogin);

router.post('/signup', UserController.newUserSignup);

router.get('/callback/gauth/',(req,res) => {
	var code = req._parsedOriginalUrl.query.slice(5);
	console.log(code)
})

router.get('store_token', (req,res) => {
	console.log("hey")
})

module.exports = router;
