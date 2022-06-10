const Sequelize = require('sequelize');

const connection = require('../database/database');

const Cliente = connection.define('tblCliente', {
  idCliente: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  sobrenome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(200),
    unique: true,
    allowNull: false,
  },
  celular: {
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false,
  },
});

// Cliente.sync({ force: true });

module.exports = Cliente;
