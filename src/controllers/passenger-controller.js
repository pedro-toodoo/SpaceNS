'use strict';

const repository = require('../repositories/passenger-repository');
const md5 = require('md5');
const config = require('../config');
const ValidationContract = require('../validators/fluent-validator');
const authService = require('../services/authentication-service');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve ter no mínimo 3 caracteres');
    contract.isEmail(req.body.email, 'Email inválido');
    contract.hasMinLen(req.body.password, 8, 'A senha deve ter no mínimo 8 caracteres');
    contract.hasMinLen(req.body.spacecraft, 3, 'O nome da nave deve ter no mínimo 3 caracteres');
    
    //se for inválido: 
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            name: req.body.name,
            birth_date: req.body.birth_date,
            sex: req.body.sex,
            profession: req.body.profession,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            spacecraft: req.body.spacecraft,
            roles: ["user"]
        });

        res.status(201).send({
            message: 'Passageiro cadastrado com sucesso'
        });
    } catch (e) {
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

        if (!passenger) {
            res.status(404).send({
                message: 'Usuário ou senha inválida'
            });
            return;
        }

        const token = await authService.generateToken({
            email: passenger.email,
            name: passenger.name,
        })

        res.status(201).send({
            token: token,
            data: {
                email: passenger.email,
                name: passenger.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};