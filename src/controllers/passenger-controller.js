'use strict';

const repository = require('../repositories/passenger-repository');
const md5 = require('md5');
const ValidationContract = require('../validators/fluent-validator');
const authService = require('../services/auth-services');

exports.get = async (req, res, next) => {
    var data = await repository.get();
    res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve ter no mínimo 3 caracteres');
    contract.isEmail(req.body.email, 'Email inválido');
    contract.hasMinLen(req.body.password, 8, 'A senha deve ter no mínimo 8 caracteres');
    contract.hasMinLen(req.body.nameSpacecraft, 3, 'O nome da nave deve ter no mínimo 3 caracteres');
    
    //se for inválido: 
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            name: req.body.name,
            birthDate: req.body.birthDate,
            sex: req.body.sex,
            profession: req.body.profession,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            nameSpacecraft: req.body.nameSpacecraft
        });

        res.status(201).send({
            message: 'Passageiro cadastrado com sucesso'
        });
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};

exports.authenticate = async (req, res, next) => {
    try {
        const passenger = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });
        
        console.log(req.body);

        if (!passenger) {
            res.status(404).send({
                message: 'Usuário ou senha inválida'
            });
            return;
        }

        const token = await authService.generateToken({
            email: passenger.email,
            name: passenger.name
        });
        
        res.status(201).send({
            token: token,
            data: {
                name: passenger.name,
                birthDate: passenger.birthDate,
                sex: passenger.sex,
                profession: passenger.profession,
                email: passenger.email,
                spacecraft: passenger.spacecraft
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};