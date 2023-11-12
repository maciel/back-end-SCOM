const db = require('../config/db');
const User = require('./usuarios');


const Diario = db.sequelize.define('diario', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
      },
      entrada: {
        type: db.Sequelize.DATE,
        allowNull: false,
      },
      saida: {
        type: db.Sequelize.DATE,
      },
    }, { timestamps: false, freezeTableName: true });

    User.hasMany(Diario, { foreignKey: 'userId' });
    Diario.belongsTo(User, { foreignKey: 'userId' });

// Sincronize o modelo com o banco de dados
// Diario.sync({ force: true });

module.exports = Diario;
