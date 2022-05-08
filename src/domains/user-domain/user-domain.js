const { findUserByEmail } = require('../../infrastructure/repositories/user-repository/user-registration-repository');
const httpStatusResponse = require('../../commons/http-response/http-status-response');

const existsUser = async (email) => {
  try {
    const user = await findUserByEmail(email)

    if (!user) return false;

    return true;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User domain");
    return finalError;
  }
}

const isFundamentalTwo = (schooling) => {
  try {
    if (schooling >= 1 && schooling <= 5) {
      return false;
    }
    return true;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User domain");
    return finalError;
  }
}

module.exports = { existsUser, isFundamentalTwo };