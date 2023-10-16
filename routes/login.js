const express = require("express");
const router = express.Router()
const User = require('../models/usuarios');


router.post('/', (req, res) => {
    console.log("ahhhhhh")
    try {
      const { email, senha } = req.body;
      console.log(req.body.email)
      console.log(req.body.senha)
      // Verifique se o usuário existe no banco de dados simulado (arquivo JSON)
      const procura = User.findOne(e => e.req.body.email === email && e.req.body.email === senha);
      console.log("Teste")
    if (procura) {
        console.log("teste")
        res.status(200).json({ mensagem: 'Login bem-sucedido!' });
      } else {
        res.status(401).json({ erro: 'Credenciais inválidas.' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao fazer login.' });
    }
  });

  module.exports = router