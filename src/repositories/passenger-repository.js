'use strict';

const mongoose = require('mongoose');
const Passenger = mongoose.model('Passenger');

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