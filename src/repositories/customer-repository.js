'use strict';

const Custumer = require('../models/customer');

exports.create = async (data) => {
    var custumer = new Custumer(data);
    await custumer.save()
}

exports.authenticate = async(data) => {
    const res = await Custumer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}
