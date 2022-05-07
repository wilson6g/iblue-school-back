const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const User = require('../../database/model/user-model/user-registration-model');
const generateId = require('../../../commons/generate-uid/generate-uuid-v4');

const createUser = async (username, password, schooling) => {
  try {
    const userCreated = await User.create({
      id: generateId(),
      username: username,
      password: password,
      schooling: schooling,
      is_fundamental_two: false
    });

    return userCreated;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User repository");
    return finalError;
  }
}

const findUserFundamentalTwo = async (username) => {
  try {
    
  } catch (error) {

  }
}

const listAllUsers = async () => {
  try {

  } catch (error) {

  }
}

const updateUser = async (id, username, password, schooling) => {
  try {

  } catch (error) {

  }
}

const deleteUser = async (id) => {
  try {

  } catch (error) {

  }
}

const findUserById = async (id) => {
  try {

  } catch (error) {

  }
}

module.exports = { createUser, deleteUser, findUserById, updateUser, listAllUsers };