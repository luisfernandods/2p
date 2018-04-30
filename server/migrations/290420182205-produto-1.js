module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("produto", {
      _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nome: {
        type: Sequelize.STRING(256),
        allowNull: false,
        required: true
      },
      preco: { type: Sequelize.FLOAT, validate: { min: 0 } },
      ativo: { type: Sequelize.BOOLEAN, defaultValue: true },
      imagem: { type: Sequelize.TEXT("medium"), allowNull: true },
      idCategoria: {
        type: Sequelize.INTEGER,
        references: {
          model: "categoria",
          key: "_id",
          allowNull: true,
          onDelete: "cascade"
        }
      },
      dataDeInclusao: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      dataDeAlteracao: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("produto");
  }
};
