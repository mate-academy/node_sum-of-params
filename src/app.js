/* eslint-disable no-console */
'use strict';

const operation = process.argv[2];
const numbers = process.argv
  .slice(3)
  .map(Number)
  .filter((value) => !isNaN(value));

if (numbers.length === 0) {
  console.log('There is nothing to add or multiply.');
} else {
  switch (operation) {
    case 'add':
      const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      console.log(`The sum of all numbers is ${sum}`);
      break;
    case 'multiply':
      const product = numbers.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1
      );

      console.log(`The product of all numbers is ${product}`);
      break;
    default:
      console.log('Operation is not supported!');
  }
}
