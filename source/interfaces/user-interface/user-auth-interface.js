const express = require('express');
const { authenticateUser } = require('../../infrastructure/repositories/user-repository/user-registration-repository');
const userAuthInterface = express.Router();
const validateFieldsLoginUser = require('../../controllers/user-controller/login-user-verify-inputs');

userAuthInterface.post('/api/auth/user', async (request, response) => {
  const fieldsIsValid = validateFieldsLoginUser(request, response);

  if (fieldsIsValid != true) return fieldsIsValid;

  const userLogged = await authenticateUser(request, response);

  if (userLogged != true) return response.status(userLogged.statusCode).json({ message: userLogged.body }).send();

  return response.status(200).json({ message: "Usuário autenticado com sucesso!" }).send();
})

module.exports = userAuthInterface;