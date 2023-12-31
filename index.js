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
const auth = require('./routes/authController')
const project = require('./routes/projectController')
const forms = require('./routes/formulario')
const imagem = require('./routes/imagens')
const entrada = require('./routes/entrada')
const saida = require('./routes/saida')
const retorno = require('./routes/retorno')

//Usar rotas
app.use('/cadastro', cadastro)
app.use('/login', login)
app.use('/authController', auth)
app.use('/projectController', project)
app.use("/formulario", forms)
app.use('/imagens', imagem)
app.use('/saida', saida)
app.use('/entrada', entrada)
app.use('/retorno', retorno)


app.listen(PORT, () => {
  console.log(`Servidor Node.js em execução na porta ${PORT}`);
});


