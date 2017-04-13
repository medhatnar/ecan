const routerAPI = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');

routerAPI.get('/api/getMail',(req,res) => {
	console.log(req.body)
	
});

routerAPI.get('https://content.googleapis.com/gmail/v1/users/narminshahin@gmail.com/messages?key=AIzaSyBA9yzhZ88Bpv3Epwyj9Rg1ND9SWTnrSj8', (req,res) => {
	console.log("RESULT",res)
})


module.exports = routerAPI;
