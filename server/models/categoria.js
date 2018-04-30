var sequelize = require("../config/database/sequelize"),
  Sequelize = require("sequelize");

const Categoria = sequelize.define("categoria", {
  _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: {
    type: Sequelize.STRING(256),
    allowNull: false,
    required: true
  }
});

module.exports = Categoria;
