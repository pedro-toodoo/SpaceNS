'use strict';

const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repositories/crew-repository');
const md5 = require('md5');
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
    contract.isEmail(req.body.emailSupervisor, 'Email inválido');
    
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
            specialization: req.body.specialization,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            nameSpacecraft: req.body.nameSpacecraft,
            emailSupervisor: req.body.emailSupervisor
        });

        res.status(201).send({
            message: 'Membro da tripulação cadastrado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};

exports.authenticate = async (req, res, next) => {
    try {
        const crew = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!crew) {
            res.status(404).send({
                message: 'Usuário ou senha inválida'
            });
            return;
        }

        const token = await authService.generateToken({
            email: crew.email,
            name: crew.name,
            nameSpacecraft: crew.nameSpacecraft
        })

        res.status(201).send({
            token: token,
            data: {
                name: crew.name,
                birthDate: crew.birthDate,
                sex: crew.sex,
                specialization: crew.specialization,
                email: crew.email,
                emailSupervisor: crew.emailSupervisor,
                nameSpacecraft: crew.nameSpacecraft
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};