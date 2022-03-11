'use strict';

const express = require('express');
const api = require("./baseURL");
const app = express();
const auth = require('../services/auth-services');

app.get('/', (req, res) => {
    return res.send({
        message: "Pedro teste 1 - API"
    });
});

app.get('/infos', async (req, res) => {
    try {
        const { data } = await api.get('v3');

        return res.send({ name: data });
    } catch (error) {
        res.send({ error: error.message });
    }
});

app.get('/rockets', async (req, res) => {
    const token = req.query['token'];
    //console.log(token);

    const token2 = await auth.decodeToken(token);
    console.log(token2['nameSpacecraft']);
    
    try {
        const { data } = await api.get('/v3/launches?rocket_id=' + token2['nameSpacecraft']);
        var lista = [];

        const { data: link } = await api.get('/v3/rockets/' + token2['nameSpacecraft']);
        const imgs = link.flickr_images
        lista.push({
            name_rocket: data[4].rocket['rocket_name'],
            first_stage: data[4].rocket['first_stage']['cores'][0]['core_serial'],
            second_stage: data[4].rocket['second_stage']['payloads'][0]['payload_mass_kg'],
            link_patch: data[4]['links']['mission_patch'],
            link_video: data[4]['links']['video_link'],
            details: data[4]['details'],
            launch_site: data[4]['launch_site']['site_name'],
            img1: imgs[0],
            img2: imgs[1]
        });

        return res.send(lista);
    } catch (error) {
        res.send({ error: error.message });
    }
});

app.get('/link', async (req, res) => {
    try {
        const { data } = await api.get('/v3/rockets/falcon9');
        const imgs = data.flickr_images
        var lista = [];

        lista.push({
            imagem1: imgs[0],
            imagem2: imgs[1],
            imagem3: imgs[2]
        });

        return res.send(lista);
    } catch (error) {
        res.send({ error: error.message });
    }
});

module.exports = app;