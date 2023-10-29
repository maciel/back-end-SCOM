<<<<<<< HEAD
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// Conexão com o banco de dados MySql
const sequelize = new Sequelize('user', 'root', 'Lpt15102002', {
  host: 'localhost',
  dialect: 'mysql',
});
=======
const db = require('../config/db')

>>>>>>> d0e55ce2ce1cf7520fc385f84559f2dcc3d4ad9f


const User = db.sequelize.define('user', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: db.Sequelize.STRING,
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
