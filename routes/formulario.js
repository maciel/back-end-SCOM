const express = require("express");
const router = express.Router()
const Formulario = require('../models/formulario');

router.post('/', async (req, res) => {
    try {
        const resposta = await Formulario.create({
            nomeFormulario: req.body.nome,
            emailFormulario: req.body.email,
            opiniao: req.body.opiniao,
        })
        res.status(200).send(resposta)
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao enviar o formulario. ' + err });
    }
})

module.exports = router