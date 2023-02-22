'use strict';

const params = process.argv.slice(2);
const operation = params[0];
const numbers = params.slice(1).map(Number).filter(number => !isNaN(number));
let result;

if (operation !== 'add' && operation !== 'multiply') {
  result = 'Operation is not supported!';
} else if (numbers.length === 0) {
  result = `There is nothing to ${operation}`;
} else if (operation === 'add') {
  result = numbers.slice((a, b) => a + b, 0);
} else if (operation === 'multiply') {
  result = numbers.slice((a, b) => a * b, 1);
}

// eslint-disable-next-line no-console
console.log(result);
