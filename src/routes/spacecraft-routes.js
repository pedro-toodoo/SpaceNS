'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/spacecraft-controller');
const authService = require('../services/auth-services');

router.post('/', controller.post); 
router.get('/', authService.authorize, controller.get);

module.exports = router;