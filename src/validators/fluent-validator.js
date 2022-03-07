'use strict';

let errors = [];

function ValidationContracts(){
    errors = [];
}

ValidationContracts.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({message: message});    
}

ValidationContracts.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({message: message});
}

ValidationContracts.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({message: message});
}

ValidationContracts.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({message: message});
}

ValidationContracts.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContracts.prototype.errors = () => { 
    return errors; 
}

ValidationContracts.prototype.clear = () => {
    errors = [];
}

ValidationContracts.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContracts;

