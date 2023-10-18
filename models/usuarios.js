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
  nivel: {
    type: db.Sequelize.INTEGER,
    allowNull: true
  }
},
  { timestamps: false, freezeTableName: true });

  // User.sync({force: true})
module.exports = User;
