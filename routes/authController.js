const express = require("express");
const router = express.Router();
const User = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

router.post('/', async (req, res) => {
    const { email, senha } = req.body;
    console.log(req.body);
    try {
        // Buscar o usuário pelo email
        const usuar = await User.findOne({ where: { email: email } });
        console.log("Usuar =>", usuar); // Exibe o usuário encontrado no console

        if (!usuar) {
            return res.status(400).json({ err: 'Usuário não encontrado' });
        }

        // Verificar a senha
        const senhaValida = await bcrypt.compare(senha, usuar.senha);
        if (!senhaValida) {
            return res.status(400).json({ err: 'Senha inválida' });
        }

        // Se chegou até aqui, a autenticação foi bem-sucedida
        usuar.senha = undefined

        const token =jwt.sign({id : usuar.id}, authConfig.secret, {
            expiresIn: 86400,
        })        
        res.status(200).json({ usuario: usuar, token: token });
    } catch (err) {
        console.error(err); // Exibe o erro no console para depuração
        res.status(500).json({ err: 'Erro ao autenticar o usuário.' });
    }
});

module.exports = router;
