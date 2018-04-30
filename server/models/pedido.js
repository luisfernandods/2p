var sequelize = require("../config/database/sequelize"),
  Sequelize = require("sequelize");

const Pedido = sequelize.define("pedido", {
  _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  idUsuario: {
    type: Sequelize.INTEGER,
    references: {
      model: "usuario",
      key: "_id",
      allowNull: true,
      onDelete: "cascade"
    }
  },
  valorTotal: { type: Sequelize.NUMBER, validate: { min: 0 } },
  dataPedido: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

module.exports = Pedido;
