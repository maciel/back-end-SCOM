const db = require('../config/db')

const Formulario = db.sequelize.define('formulario', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nomeFormulario: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  emailFormulario: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  opiniao: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
  }});

// Formulario.sync({force: true})
module.exports = Formulario;

