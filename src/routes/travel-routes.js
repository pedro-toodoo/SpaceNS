'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel-controller');
const authService = require('../services/authentication-service');

router.post('/', authService.authorize, controller.post); 
router.get('/', authService.authorize, controller.get);

module.exports = router;