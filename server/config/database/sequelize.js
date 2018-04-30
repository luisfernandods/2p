const Sequelize = require("sequelize");
const sequelize = new Sequelize("2p", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com o Banco.");
  })
  .catch(err => {
    console.error("Não foi possivel conectar com o banco:", err);
  });

module.exports = { sequelize: sequelize, Sequelize: Sequelize };
