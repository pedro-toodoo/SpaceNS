'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/crew-controller');
const authService = require('../services/authentication-service');

router.post('/', controller.post); 
router.post('/login', controller.authenticate);
router.get('/', authService.authorize,controller.get);

module.exports = router;