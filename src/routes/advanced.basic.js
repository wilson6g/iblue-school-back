const express = require('express');
const advancedOperationsRouter = express.Router();
const { percent, square, convertToBinary } = require('../infrastructure/repositories/math/advanced/advanced-operations-repository');

advancedOperationsRouter.post('/percent', (request, response) => {
  const { totalValue, percentValue } = request.body;

  const percentResult = percent(totalValue, percentValue);

  return response.status(201).json(percentResult);
});

advancedOperationsRouter.post('/square', (request, response) => {
  const { numbers } = request.body;

  const squareResult = square(numbers);

  return response.status(201).json(squareResult);
});

advancedOperationsRouter.post('/convertToBinary', (request, response) => {
  const { numbers } = request.body;

  const squareResult = convertToBinary(numbers);

  return response.status(201).json(squareResult);
});

module.exports = advancedOperationsRouter;