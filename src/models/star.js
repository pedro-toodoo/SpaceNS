'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    mass: {
        type: Number,
        required: true,
        trim: true //remove espaços antes e depois da string 

    },
    size: {
        type: Number,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    galaxy_name: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    luminosity: {
        type: Number,
        required: true,
        trim: true //remove espaços antes e depois da string 
    }
});

module.exports = mongoose.model('Star', schema);