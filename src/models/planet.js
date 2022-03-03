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
    star: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Star'
    }
});

module.exports = mongoose.model('Planet', schema);