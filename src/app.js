'use strict';

const operation = process.argv.slice(2)[0];
const inputParams = process.argv.slice(3);

const calculate = (action, params) => {
  const result = params
    .filter(el => !isNaN(Number(el)))
    .map(el => Number(el));

  if (!result.length && action) {
    return `There is nothing to ${action}`;
  }

  switch (action) {
    case 'add':
      return result.reduce((a, b) => a + b, 0);
    case 'multiply':
      return result.reduce((a, b) => a * b, 1);
    default:
      return 'Operation is not supported!';
  }
};

// eslint-disable-next-line
console.log(calculate(operation, inputParams));
