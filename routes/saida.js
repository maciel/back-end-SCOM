const express = require("express");
const Diario = require("../models/diarioBordo");
const router = express.Router();

router.post('/:teste', async (req, res) => {
    const teste = req.params.teste;

    if (!teste) {
      return res.status(400).json({ error: 'O ID do usuário é obrigatório.' });
    }

    try {
      // Busque o registro correspondente ao usuário e que ainda não possui uma saída registrada
      const diarioEntry = await Diario.findOne({
        where: {
          userId: teste,
          saida: null,
        },
      });

      if (!diarioEntry) {
        return res.status(400).json({ error: 'Usuário não registrado ou já saiu.' });
      }

      // Atualize o registro no banco de dados com a hora de saída
      await diarioEntry.update({ saida: new Date() });

      res.json({ mensagem: 'Saída registrada com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao registrar saída.' });
    }
});

module.exports = router;
