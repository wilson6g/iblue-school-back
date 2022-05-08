const express = require('express');
const mathRouter = express.Router();
const { sum, subtract, multiply, division } = require('../infrastructure/repositories/math-repository/basic/basic-operations-repository');
const { percent, square, convertToBinary } = require('../infrastructure/repositories/math-repository/advanced/advanced-operations-repository');

mathRouter.post('/sum', (request, response) => {
  const { numbers } = request.body;

  const sumResult = sum(numbers);

  return response.status(201).json(sumResult);
});

mathRouter.post('/subtract', (request, response) => {
  const { numbers } = request.body;

  const sumResult = subtract(numbers);

  return response.status(201).json(sumResult);
});

mathRouter.post('/multiply', (request, response) => {
  const { numbers } = request.body;

  const sumResult = multiply(numbers);

  return response.status(201).json(sumResult);
});

mathRouter.post('/division', (request, response) => {
  const { numbers } = request.body;

  const sumResult = division(numbers);

  return response.status(201).json(sumResult);
});

mathRouter.post('/percent', (request, response) => {
  const { totalValue, percentValue } = request.body;

  const percentResult = percent(totalValue, percentValue);

  return response.status(201).json(percentResult);
});

mathRouter.post('/square', (request, response) => {
  const { numbers } = request.body;

  const squareResult = square(numbers);

  return response.status(201).json(squareResult);
});

mathRouter.post('/convertToBinary', (request, response) => {
  const { numbers } = request.body;

  const squareResult = convertToBinary(numbers);

  return response.status(201).json(squareResult);
});

module.exports = mathRouter;