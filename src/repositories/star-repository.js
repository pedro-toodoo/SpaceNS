'use strict';

const Star = require('../models/star');

exports.get = async() => {
    const res = await Star.findAll();
    return res;
}

exports.create = async (data) => {
    var star = new Star(data);
    await star.save()
}

