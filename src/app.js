'use strict';

function parseArguments() {
  const operation = process.argv[2];
  const numbers = [];

  for (const arg of process.argv.slice(3)) {
    numbers.push(parseFloat(arg));
  }

  return {
    operation,
    numbers,
  };
}

const calculate = (input) => {
  switch (input.operation) {
    case 'add':
      if (!input.numbers.length) {
        return 'There is nothing to add';
      }

      return input.numbers.reduce((a, b) => a + b);
    case 'multiply':
      if (!input.numbers.length) {
        return 'There is nothing to multiply';
      }

      return input.numbers.reduce((a, b) => a * b);
    default:
      return 'Operation is not supported';
  }
};

calculate(parseArguments()).toString();
