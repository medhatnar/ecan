const router = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');
const GetUrl = require('../auth_gmail/get_url.js');
const GetToken = require('../auth_gmail/get_token.js');
const StoreToken = require('../database/models/UserModel.js'); 

router.post('/auth/login', UserController.userLogin);

router.post('/auth/signup', UserController.newUserSignup);

router.get('/auth/callback/gauth',(req,res) => {

	var code = req._parsedOriginalUrl.query.slice(5);
	var token = GetToken.getAuthorizationToken(code);
	console.log("HEY", token)
})

router.post('/auth/getUrl',(req,res) => {
		console.log(req.body)

	const authUrl = JSON.stringify(GetUrl.getAuthorizationUrl());

	res.send(authUrl)
})

router.get('/auth/token', (req,res) => {
	console.log("hey store gauth or token")
})

module.exports = router;
