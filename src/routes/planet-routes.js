'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/planet-controller');
const authService = require('../services/authentication-service');

router.get('/', authService.authorize,controller.get);
router.post('/', authService.authorize, controller.post); 

module.exports = router;