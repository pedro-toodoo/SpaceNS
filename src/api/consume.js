'use strict';

const express = require('express');
const api = require("./baseURL");
const app = express();

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
    try {
        const { data } = await api.get('/v3/launches');
        var lista = [];

        for (var i = 0; i < data.length; i++) {
            const { data: link } = await api.get('/v3/rockets/' + data[i].rocket['rocket_id']);
            const imgs = link.flickr_images
            lista.push({
                name_rocket: data[i].rocket['rocket_name'],
                first_stage: data[i].rocket['first_stage']['cores'][0]['core_serial'],
                second_stage: data[i].rocket['second_stage']['payloads'][0]['payload_mass_kg'],
                link_patch: data[i]['links']['mission_patch'],
                link_video: data[i]['links']['video_link'],
                details: data[i]['details'],
                launch_site: data[i]['launch_site']['site_name'],
                img1: imgs[0],
                img2: imgs[1]
            });
        }

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