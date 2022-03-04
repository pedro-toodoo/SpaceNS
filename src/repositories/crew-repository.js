'use strict';

const Crew = require('../models/crew');

exports.create = async (data) => {
    var crew = new Crew(data);
    await crew.save()
}

exports.authenticate = async (data) => {
    const res = await Crew.findOne({
        email: data.email,
        password: data.password
    });
    return res; 
}
