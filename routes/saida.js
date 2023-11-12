const express = require("express");
const Diario = require("../models/diarioBordo");
const router = express.Router()

router.post('/', async (req, res) => {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({ error: 'O ID do usuário é obrigatório.' });
    }
  
    if (!userSessions[userId] || userSessions[userId].saida) {
      return res.status(400).json({ error: 'Usuário não registrado ou já saiu.' });
    }
  
    const saidaHora = new Date();
    Diario[userId].saida = saidaHora;
  
    res.json({ mensagem: 'Saída registrada com sucesso.' });
  });

module.exports = router