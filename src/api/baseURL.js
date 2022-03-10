const axios = require("axios");

const api = axios.create({
    baseURL: 'https://api.spacexdata.com/',
});

module.exports = api;