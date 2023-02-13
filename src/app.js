'use strict';

const operands = process.argv.slice(3)
  .filter(n => !isNaN(Number(n)))
  .map(n => Number(n));

const result = {
  add: operands.reduce((a, b) => a + b, 0),
  multiply: operands.reduce((a, b) => a * b, 1),
};

const operation = process.argv[2];

const getMessage = () => {
  if (!(operation in result)) {
    return 'Operation is not supported!';
  }

  if (!operands.length) {
    return `There is nothing to ${operation}`;
  }

  return result[operation];
};

// eslint-disable-next-line no-console
console.log(getMessage());
