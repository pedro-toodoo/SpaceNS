'use strict';

const repository = require('../repositories/map-repository');
const md5 = require('md5');
const ValidationContract = require('../validators/fluent-validator');
const authService = require('../services/authentication-service');

exports.get = async (req, res, next) => {
    var data = await repository.get();
    res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.orientation, 3, 'Orientação deve ter no mínimo 3 caracteres');
        
    //se for inválido: 
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            title: req.body.title,
            scale: req.body.scale,
            orientation: req.body.orientation,
            idTravel: req.body.idTravel
        });

        res.status(201).send({
            message: 'Mapa cadastrada com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};
