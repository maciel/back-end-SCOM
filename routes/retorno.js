const express = require("express");
const Diario = require("../models/diarioBordo");
const db = require("../config/db");
const router = express.Router();

// Rota para obter a primeira data de entrada e a última data de saída
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    console.log("user: ", userId);
    if (!userId) {
        return res.status(400).json({ error: 'O ID do usuário é obrigatório.' });
    }

    try {
        // Busque o registro correspondente ao usuário e que tenha uma entrada registrada
        const primeiraEntrada = await Diario.findOne({
            where: {
                userId: userId,
                entrada: { [db.Sequelize.Op.not]: null },
            },
            order: [['entrada', 'ASC']],
        });

        console.log('Primeira Entrada:', primeiraEntrada);

        // Busque o registro correspondente ao usuário e que tenha uma saída registrada
        const ultimaSaida = await Diario.findOne({
            where: {
                userId: userId,
                saida: { [db.Sequelize.Op.not]: null },
            },
            order: [['saida', 'DESC']],
        });

        console.log('Ultima Saida:', ultimaSaida);

        res.json({
            primeiraEntrada: primeiraEntrada ? primeiraEntrada.entrada : null,
            ultimaSaida: ultimaSaida ? ultimaSaida.saida : null,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar datas.' });
    }
});

module.exports = router;