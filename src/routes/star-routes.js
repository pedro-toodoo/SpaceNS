'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/star-controller');
const authService = require('../services/authentication-service');

router.post('/', authService.authorize, controller.post); 
router.get('/', authService.authorize, controller.get);
//router.post('/authenticate', controller.authenticate);
//router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;