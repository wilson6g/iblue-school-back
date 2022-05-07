const Sequelize = require('sequelize');
const sequelize = require('../../../configuration/connect-database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  schooling: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_fundamental_two: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  }
});

module.exports = User;