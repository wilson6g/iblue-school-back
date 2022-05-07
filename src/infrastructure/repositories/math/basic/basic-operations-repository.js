const sum = (numbers) => {
  const sumResult = numbers.reduce(function (sumTotal, number) {
    return sumTotal + number;
  });

  return sumResult;
}

const multiply = (numbers) => {
  const multiplyResult = numbers.reduce(function (multiplyTotal, number) {
    return multiplyTotal * number;
  });

  return multiplyResult;
}

//TODO first number always positive;
const subtract = (numbers) => {
  const subtractResult = numbers.reduce(function (subtractTotal, number) {
    return subtractTotal - number;
  });

  return subtractResult;
}

//TODO first number always positive;
const division = (numbers) => {
  const divisionResult = numbers.reduce(function (divisionTotal, number) {
    return divisionTotal / number;
  });

  return divisionResult;
}

module.exports = { sum, division, subtract, multiply };