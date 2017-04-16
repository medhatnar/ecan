const routerAPI = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');

routerAPI.post('/getMail',(req,res) => {
console.log("REQQQQQQQQQQQQQQQQQQQQ: ", req.body)
	
});


module.exports = routerAPI;
