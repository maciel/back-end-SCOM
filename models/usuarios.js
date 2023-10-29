const db = require('../config/db')


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
