const express = require("express");
const router = express.Router();
const User = require('../models/usuarios');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
    const { email, senha } = req.body;

    // Passo 1: Busque o usuário com base no e-mail
    User.findOne({ where: { email } })
        .then(user => {
            if (user) {
                // Passo 2: Compare a senha fornecida com a senha criptografada no banco de dados
                bcrypt.compare(senha, user.senha, (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Erro no servidor' });
                    }
                    user.senha = undefined;
                    if (result) {
                        return res.status(200).json(user);
                    } else {
                        return res.status(401).json({ message: 'Credenciais inválidas' });
                    }
                });
            } else {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor' });
        });
});

module.exports = router;
