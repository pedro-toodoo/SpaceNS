'use strict';

const mongoose = require('mongoose');
const Star = mongoose.model('Star');

exports.get = async() => {
    const res = await Star.find({}, 'name mass size galaxy_name');
    return res;
}

exports.create = async (data) => {
    var star = new Star(data);
    await star.save()
}

