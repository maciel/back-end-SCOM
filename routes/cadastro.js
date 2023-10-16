const express = require("express");
const router = express.Router()
const User = require('../models/usuarios');

router.post('/', async (req, res) => {
    try {
        const resposta = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        })
        res.status(200).send("deu certo")
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao cadastrar o usuário.' });
    }
})

module.exports = router