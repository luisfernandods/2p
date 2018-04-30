module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("categoria", {
      _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nome: {
        type: Sequelize.STRING(256),
        allowNull: false,
        required: true
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("categoria");
  }
};
