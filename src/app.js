/* eslint-disable no-console */
'use strict';

const [operation, ...numbers] = process.argv.slice(2);

const numeric = numbers.map((num) => isNaN(+num) ? null : +num)
  .filter((num) => num !== null);

if (numeric.length === 0) {
  console.log(`There is nothing to ${operation}`);
}

switch (operation) {
  case 'add':
    const add = numeric.reduce((num3, num4) => num3 + num4);

    console.log(add);

    break;

  case 'multiply':
    const multiply = numeric.reduce((num1, num2) => num1 * num2);

    console.log(multiply);
    break;

  default:
    console.log('Operation is no supported');
}
