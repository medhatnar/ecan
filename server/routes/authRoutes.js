const router = require('express').Router();
const UserController = require('../database/controllers/UserController.js');
const GroupsController = require('../database/controllers/GroupsController.js');
const PermissionsController = require('../database/controllers/PermissionsController.js');

//Connect controller methods to their corresponding routes

 router.post('/login', UserController.userLogin);

// router.get('/signup', UserController.signup.get);
 router.post('/signup', UserController.newUserSignup);

module.exports = router;
