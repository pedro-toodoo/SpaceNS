'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API em Node - SpaceNS", 
        version: "1.0.0"
    });
});

module.exports = router;