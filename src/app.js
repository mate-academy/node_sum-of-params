/* eslint-disable no-console */
'use strict';

const operation = process.argv.slice(2)[0];

const numbers = process.argv.slice(3).map(elem => Number(elem));

if (!numbers.length) {
  console.log(`There is nothing to ${operation}`);
} else {
  switch (operation) {
    case 'add':
      const resultAdd = numbers
        .reduce((element, sum) => sum + parseInt(element));

      console.log(resultAdd);
      break;

    case 'multiply':
      const resultMultiply = numbers
        .reduce((element, sum) => sum * Number(element));

      console.log(resultMultiply);
      break;

    default:
      console.log('Operation is not supported!');
  }
}
