const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//Carregar rotas
const cadastro = require('./routes/cadastro')
const login = require('./routes/login')

//Usar rotas
app.use('/cadastro', cadastro)
app.use('/login', login)

app.listen(PORT, () => {
  console.log(`Servidor Node.js em execução na porta ${PORT}`);
});


