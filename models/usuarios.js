const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// Conexão com o banco de dados MySql
const sequelize = new Sequelize('user', 'root', 'Lpt15102002', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, { timestamps: false, freezeTableName: true });

// Adicione um gancho (hook) para criptografar a senha antes de salvar
User.beforeCreate(async (user, options) => {
  const saltRounds = 10; // Nível de força da criptografia (ajuste conforme necessário)
  user.senha = await bcrypt.hash(user.senha, saltRounds);
});

// Sincronize o modelo com o banco de dados
User.sync({ force: true });

module.exports = User;
