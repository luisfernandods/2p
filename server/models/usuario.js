var sequelize = require("../config/database/sequelize"),
  Sequelize = require("sequelize");

const Usuario = sequelize.define("usuario", {
  _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true
  }
});

module.exports = Usuario;
