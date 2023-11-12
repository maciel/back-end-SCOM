const Sequelize = require("sequelize")
const database = require("../docs/database")

//Conexão com o DB MYSQL

const sequelize = new Sequelize('exemplo', 'root', 'Lpt15102002', { 
    host: "localhost",
    dialect: 'mysql',
})

sequelize.authenticate().then(() => console.log("Conectado ao banco de dados!")).catch(err => console.log("Falha ao se conectar: " + err))

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}