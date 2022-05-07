const express = require('express');
const basicOperationsRouter = express.Router();
const {sum, subtract, multiply, division} = require('../domains/math/basic/basic-operations');

basicOperationsRouter.post('/sum', (request, response) => {
  const { numbers } = request.body;

  const sumResult = sum(numbers);

  return response.status(201).json(sumResult);
});

basicOperationsRouter.post('/subtract', (request, response) => {
  const { numbers } = request.body;

  const sumResult = subtract(numbers);

  return response.status(201).json(sumResult);
});

basicOperationsRouter.post('/multiply', (request, response) => {
  const { numbers } = request.body;

  const sumResult = multiply(numbers);

  return response.status(201).json(sumResult);
});

basicOperationsRouter.post('/division', (request, response) => {
  const { numbers } = request.body;

  const sumResult = division(numbers);

  return response.status(201).json(sumResult);
});

module.exports = basicOperationsRouter;