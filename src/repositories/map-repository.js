'use strict';

const Map = require('../models/map');

exports.get = async() => {
    const res = await Map.findAll();
    return res;
}

exports.create = async (data) => {
    var map = new Map(data);
    await map.save()
}

