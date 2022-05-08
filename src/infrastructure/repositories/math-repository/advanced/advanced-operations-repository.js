const percent = (totalValue, percentValue) => {
  return totalValue * (percentValue / 100);
}

const square = (number) => {
  return Math.sqrt(number);
}

const convertToBinary = (number) => {
  return parseInt(number.toString(2));
}

module.exports = { percent, square, convertToBinary };