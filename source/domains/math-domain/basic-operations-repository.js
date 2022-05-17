const operation = (request, response) => {
  try {
    const { numbers } = request.body;

    if (numbers[numbers.length - 1].includes("%")) {
      var totalValue = numbers[numbers.length - 1].split("%")[0];
      var percentValue = numbers[numbers.length - 1].split("%")[1];
      return eval(totalValue * (percentValue / 100)).toString();
    }

    if (numbers[numbers.length - 1].includes("√")) {
      var totalValue = numbers[numbers.length - 1].split("√")[0];
      return Math.sqrt(parseFloat(totalValue)).toString();
    }

    return eval(numbers[numbers.length - 1].toString());

  } catch (error) {
    return response.status(400).json({ message: "Erro ao realizar o cálculo, operação inválida!" }).send();
  }

}

module.exports = { operation };