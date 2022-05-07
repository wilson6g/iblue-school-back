const User = require('./model/user-model/user-registration-model');

const dbInit = () => {
  User.sync();
}

module.exports = dbInit;