module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuario", {
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
  },

  down: queryInterface => {
    return queryInterface.dropTable("usuario");
  }
};
