const routerAPI = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');

routerAPI.get('/api/getUserInfo',(req,res) => {
	console.log(req.body)
	// AIzaSyBA9yzhZ88Bpv3Epwyj9Rg1ND9SWTnrSj8
});

routerAPI.get('')

module.exports = routerAPI;
