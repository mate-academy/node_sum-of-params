/* eslint-disable no-console */
'use strict';

const args = process.argv.slice(2);

const operation = args[0];

const numbers = args.slice(1).filter(arg => !isNaN(arg)).map(Number);

if (!numbers.length) {
  switch (operation) {
    case 'add' || 'multiply':
      console.log(`There is nothing to ${operation}`);
      break;
    default:
      console.log('Operation is not supported!');
      process.exit(1);
  }
} else {
  let result;

  switch (operation) {
    case 'add':
      result = numbers.reduce((acc, num) => acc + num, 0);
      break;
    case 'multiply':
      result = numbers.reduce((product, num) => product * num, 1);
      break;
    default:
      console.log('Operation is not supported!');
      process.exit(1);
  }
  console.log(result);
}
