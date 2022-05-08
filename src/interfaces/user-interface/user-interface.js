const { existsUser, isFundamentalTwo } = require('../../domains/user-domain/user-domain');
const { createUser, authenticateUser } = require('../../infrastructure/repositories/user-repository/user-registration-repository');
const httpStatusResponse = require('../../commons/http-response/http-status-response');

const createUserInterface = async (email, password, schooling) => {
  try {
    const isUser = await existsUser(email);

    if (isUser == true) return "User already exists!";

    return createUser(email, password, schooling, isFundamentalTwo(schooling));

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User interface");
    return finalError;
  }
}

const userLoginInterface = async (email, password) => {
  try {
    return authenticateUser(email, password);
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User interface");
    return finalError;
  }
}

module.exports = { createUserInterface, userLoginInterface };