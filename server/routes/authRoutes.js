const router = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');
const GetUrl = require('../auth_gmail/get_url.js')

router.post('/auth/login', UserController.userLogin);

router.post('/auth/signup', UserController.newUserSignup);

router.get('/auth/callback/gauth',(req,res) => {
	var code = req._parsedOriginalUrl.query.slice(5);
	console.log("CODE: ",code)
})

router.get('/auth/getUrl',(req,res) => {
	console.log("HITTTTTTTTTTT!!!!!!!!!!!!!!!!!!!!")
	const authURL = GetUrl.getAuthorizationUrl();

	res.redirect(authURL)

})

router.get('/auth/store_token', (req,res) => {
	console.log("hey store gauth or token")
})

module.exports = router;
