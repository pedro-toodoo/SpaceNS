'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/map-controller');
const authService = require('../services/auth-services');

router.post('/', authService.authorize, controller.post); 
router.get('/', authService.authorize, controller.get);

module.exports = router;