const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const User = require('../../database/model/user-model/user-registration-model');
const generateId = require('../../../commons/generate-uid/generate-uuid-v4');

const authenticateUser = async (email, password) => {
  try {
    const isUser = await User.findOne({
      where: {
        email: email
      }
    })

    if (!isUser) return httpStatusResponse(400, "Incorrect email or password", "User repository");

    return User.prototype.validPassword(password, isUser.password);

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User repository");
    return finalError;
  }
}

const createUser = async (email, password, schooling, is_fundamental_two) => {
  try {
    const userCreated = await User.create({
      id: generateId(),
      email: email,
      password: password,
      schooling: schooling,
      is_fundamental_two: is_fundamental_two
    });

    return userCreated;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User repository");
    return finalError;
  }
}

const findUserByEmail = async (email) => {
  try {
    const isUser = await User.findOne({
      where: {
        email: email 
      }
    })

    if (!isUser) return false;

    return true;

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User repository");
    return finalError;
  }
}

const findUserFundamentalTwo = async (email) => {
  try {

  } catch (error) {

  }
}

const listAllUsers = async () => {
  try {

  } catch (error) {

  }
}

const updateUser = async (id, email, password, schooling) => {
  try {

  } catch (error) {

  }
}

const deleteUser = async (id) => {
  try {

  } catch (error) {

  }
}

module.exports = { createUser, deleteUser, findUserByEmail, updateUser, listAllUsers, authenticateUser };