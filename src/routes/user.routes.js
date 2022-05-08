const express = require('express');
const { authenticateUser } = require('../infrastructure/repositories/user-repository/user-registration-repository');
const { createUserInterface, userLoginInterface } = require('../interfaces/user-interface/user-interface');
const userRouter = express.Router();

userRouter.post('/user', async (request, response) => {
  const { email, password, schooling } = request.body;

  const user = await createUserInterface(email, password, schooling);

  return response.status(201).json(user);
});

userRouter.post('/auth/login', async (request, response) => {
  const { email, password } = request.body;

  const user = await userLoginInterface(email, password);

  return response.status(201).json(user);
});

module.exports = userRouter;