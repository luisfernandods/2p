var sequelize = require("../config/database/sequelize"),
  Sequelize = require("sequelize");

const Produto = sequelize.define("produto", {
  _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: {
    type: Sequelize.STRING(256),
    allowNull: false,
    required: true
  },
  preco: { type: Sequelize.NUMBER, validate: { min: 0 } },
  ativo: { type: Sequelize.BOOLEAN, defaultValue: false },
  imagem: { type: Sequelize.TEXT("medium"), allowNull: true },
  idCategoria: {
    type: Sequelize.INTEGER,
    references: {
      model: "categoria",
      key: "_id",
      allowNull: true,
      onDelete: "SET NULL"
    }
  },
  dataDeInclusao: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  dataDeAlteracao: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

module.exports = Produto;
