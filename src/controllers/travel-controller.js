'use strict';

const repository = require('../repositories/travel-repository');
const md5 = require('md5');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async (req, res, next) => {
    var data = await repository.get();
    res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.namePlanet, 3, 'O nome do planeta deve ter no mínimo 3 caracteres');
    contract.hasMinLen(req.body.nameSpacecraft, 3, 'O nome da nave deve ter no mínimo 3 caracteres');
    
    //se for inválido: 
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            namePlanet: req.body.namePlanet,
            duration: req.body.duration,
            distance: req.body.distance,
            nameSpacecraft: req.body.nameSpacecraft
        });

        res.status(201).send({
            message: 'Viagem cadastrada com sucesso'
        });
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};
