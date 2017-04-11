const routerAPI = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');

routerAPI.get('/api/getMail',(req,res) => {
	console.log(req.body)
	
});



module.exports = routerAPI;
