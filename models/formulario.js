const Sequelize = require('sequelize')
//Conexão com o banco de dados MySql
const sequelize = new Sequelize('trabalhodescom', 'root', '99101lucas', {
    host: "localhost",
    dialect: 'mysql',

})

const Formulario = sequelize.define('formulario', {
  nomeFormulario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  emailFormulario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opniao: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  }});

// Formulario.sync({force: true})
module.exports = Formulario;

