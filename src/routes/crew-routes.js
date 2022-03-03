'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/crew-controller');
//const authService = require('../services/auth-services');

router.post('/', controller.post); 
router.post('/login', controller.authenticate);
//router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;