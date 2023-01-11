/* eslint-disable no-console */
'use strict';

const [operation, ...values] = process.argv.slice(2);
const numericValues = values
  .filter(value => !isNaN(value))
  .map(value => Number(value));

switch (operation) {
  case 'add': {
    if (!numericValues.length) {
      console.log(`There is nothing to ${operation}`);
    }
    console.log(numericValues.reduce((total, value) => total + value), 0);
    break;
  }

  case 'multiply': {
    if (!numericValues.length) {
      console.log(`There is nothing to ${operation}`);
    }
    console.log(numericValues.reduce((total, value) => total * value, 1));
    break;
  }

  default:
    console.log('Operation is not supported!');
}
