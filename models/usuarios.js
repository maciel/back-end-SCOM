const Sequelize = require('sequelize')
//Conexão com o banco de dados MySql
const sequelize = new Sequelize('user', 'root', 'X', {
    host: "localhost",
    dialect: 'mysql',

})

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
},
  { timestamps: false, freezeTableName: true });

//   User.sync({force: true})
module.exports = User;
