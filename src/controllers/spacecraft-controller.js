'use strict';

const repository = require('../repositories/spacecraft-repository');
const md5 = require('md5');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async (req, res, next) => {
    var data = await repository.get();
    res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve ter no mínimo 3 caracteres');
    
    //se for inválido: 
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            name: req.body.name,
            numCrew: req.body.numCrew,
            numPassengers: req.body.numPassengers
        });

        res.status(201).send({
            message: 'Nave espacial cadastrada com sucesso'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};