/* eslint-disable no-console */
'use strict';

let result;
const operation = process.argv[2];
const restValues = process.argv.slice(3);
const numbers = restValues
  .map(value => Number(value))
  .filter(num => num);

if (numbers.length) {
  switch (operation) {
    case 'add':
      result = numbers.reduce((a, b) => a + b, 0);
      console.log(result);
      break;

    case 'multiply':
      result = numbers.reduce((a, b) => a * b, 1);
      console.log(result);
      break;

    default:
      console.log('Operation is not supported!');
  }
} else {
  console.log(`There is nothing to ${operation}`);
}
