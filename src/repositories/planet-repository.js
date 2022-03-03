'use strict';

const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.get = async() => {
    const res = await Planet.find({}).populate('star');
    return res;
}

exports.create = async (data) => {
    var planet = new Planet(data);
    await planet.save()
}

