const Sequelize = require('sequelize');
const sequelize = require('../../../configuration/connect-database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  schooling: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;