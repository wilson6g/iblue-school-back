const express = require('express');
const { createUser } = require('../infrastructure/repositories/user-repository/user-registration-repository');
const userRouter = express.Router();


userRouter.post('/user', async (request, response) => {
  const { username, password, schooling } = request.body;

  const user = await createUser(username, password, schooling);

  return response.status(201).json(user);
});

module.exports = userRouter;