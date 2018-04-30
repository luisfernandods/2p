module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("loja", {
      _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      cep: { type: Sequelize.STRING(10), allowNull: false, required: true },
      nomeFantasia: {
        type: Sequelize.STRING(256),
        allowNull: false,
        required: true
      },
      razaoSocial: {
        type: Sequelize.STRING(256),
        allowNull: false,
        required: true
      },
      cnpj: {
        type: Sequelize.STRING(30),
        allowNull: false,
        required: true
      },
      ativo: { type: Sequelize.BOOLEAN, defaultValue: false },
      logo: { type: Sequelize.TEXT("medium"), allowNull: true },
      dataDeInclusao: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      dataDeAlteracao: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("loja");
  }
};
