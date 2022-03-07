'use strict';

const Spacecraft = require('../models/spacecraft');

exports.get = async() => {
    const res = await Spacecraft.findAll();
    return res;
}

exports.create = async (data) => {
    var spacecraft = new Spacecraft(data);
    await spacecraft.save()
}

