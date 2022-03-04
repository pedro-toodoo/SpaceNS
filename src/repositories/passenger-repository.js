'use strict';

const Passenger = require('../models/passenger');

exports.create = async (data) => {
    var passenger = new Passenger(data);
    await passenger.save()
}

exports.authenticate = async (data) => {
    const res = await Passenger.find({
        email: data.email,
        password: data.password
    });
    return res; 
}

exports.get = async() => {
    const res = await Passenger.findAll();
    return res;
}