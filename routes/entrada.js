const express = require("express");
const Diario = require("../models/diarioBordo");
const router = express.Router();

router.post('/:userId', async (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ error: 'O ID do usuário é obrigatório.' });
    }

    try {
      // Crie um registro na tabela Diario no banco de dados
      const diarioEntry = await Diario.create({
        userId: userId,
        entrada: new Date(),
      });

      res.json({ mensagem: 'Entrada registrada com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao registrar entrada.' });
    }
});

module.exports = router;
