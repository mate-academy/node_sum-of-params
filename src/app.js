'use strict';

const params = process.argv.slice(2);
const operation = params[0];
const numbers = params.slice(1).map(Number).filter(number => !isNaN(number));
let result;

switch (operation) {
  case 'add':
    if (numbers.length === 0) {
      result = 'There is nothing to add';
    } else {
      result = numbers.reduce((a, b) => a + b, 0);
    }
    break;
  case 'multiply':
    if (numbers.length === 0) {
      result = 'There is nothing to multiply';
    } else {
      result = numbers.reduce((a, b) => a * b, 1);
    }
    break;
  default:
    result = 'Operation is not supported!';
    break;
}

// eslint-disable-next-line no-console
console.log(result);
