const router = require('express').Router();
const path = require('path')
const bcrypt= require('bcrypt-node');
const request = require('request');
const UserController = require('./database/controllers/UserController.js');
const GroupsController = require('./database/controllers/GroupsController.js');
const PermissionsController = require('./database/controllers/PermissionsController.js');

//Connect controller methods to their corresponding routes

// router.post('/signin', UserController.signin.post);

router.get('/signup', UserController.signup.get);
router.post('/signup', UserController.signup.get);

module.exports = router;
