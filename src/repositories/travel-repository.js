'use strict';

const Travel = require('../models/travel');

exports.get = async() => {
    const res = await Travel.findAll();
    return res;
}

exports.create = async (data) => {
    var travel = new Star(data);
    await travel.save()
}

