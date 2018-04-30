module.exports = {
  up: (queryInterface, Sequelize) => {
    try {
      return queryInterface.createTable("pedido", {
        _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idUsuario: {
          type: Sequelize.INTEGER,
          references: {
            model: "usuario",
            key: "_id",
            allowNull: true,
            onDelete: "SET NULL"
          }
        },
        valorTotal: { type: Sequelize.FLOAT, validate: { min: 0 } },
        dataPedido: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
      });
    } catch (error) {
      console.log(error);
    }
  },

  down: queryInterface => {
    return queryInterface.dropTable("pedido");
  }
};
