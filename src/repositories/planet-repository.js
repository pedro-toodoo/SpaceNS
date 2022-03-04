'use strict';

const Planet = require('../models/planet');

exports.get = async() => {
    const res = await Planet.findAll();
    return res;
}

exports.create = async (data) => {
    var planet = new Planet(data);
    await planet.save()
}

