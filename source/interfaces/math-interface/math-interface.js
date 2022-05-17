const express = require('express');
const basicOperationsInterface = express.Router();
const { operation } = require('../../domains/math-domain/basic-operations-repository');
const validateFieldNumberForBasicOperations = require('../../controllers/math-controller/math-verify-input');

basicOperationsInterface.post('/api/operation', (request, response) => {
  const fieldsIsValid = validateFieldNumberForBasicOperations(request, response);

  if (fieldsIsValid != true) return response.status(400).json(fieldsIsValid).send();

  const sumResult = operation(request, response);

  return response.status(201).json(sumResult).send();
})

module.exports = basicOperationsInterface;