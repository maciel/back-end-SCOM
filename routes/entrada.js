const express = require("express");
const Diario = require("../models/diarioBordo");
const router = express.Router()

router.post('/', async (req, res) => {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({ error: 'O ID do usuário é obrigatório.' });
    }
  
    const entradaHora = new Date();
    Diario[userId] = { entrada: entradaHora };
  
    res.json({ mensagem: 'Entrada registrada com sucesso.' });
  });


module.exports = router