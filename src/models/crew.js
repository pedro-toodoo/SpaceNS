'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    birth_date: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string
    },
    sex: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    specialization: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    email: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    password: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    spacecraft: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    email_supervisor: {
        type: String,
        required: true,
        trim: true //remove espaços antes e depois da string 
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});

module.exports = mongoose.model('Crew', schema);