const express = require("express");
const router = express.Router()
const User = require('../models/usuarios');
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    const folderPath = path.join(__dirname, '..', 'image', 'monsters');
  
    // Lê o conteúdo da pasta "imagens"
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao ler a pasta de imagens');
      } else {
        // Envia todas as imagens encontradas na pasta
        files.forEach(file => {
          const imagePath = path.join(folderPath, file);
          res.sendFile(imagePath);
        });
      }
    });
  });

module.exports = router