const db = require('../config/db')
const bcrypt = require('bcrypt');


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
 
},
  { timestamps: false, freezeTableName: true });
User.beforeCreate(async (user, options) => {
  const saltRounds = 10; 
  user.senha = await bcrypt.hash(user.senha, saltRounds);
});

// User.sync({force: true})
module.exports = User;
