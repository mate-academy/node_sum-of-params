/* eslint-disable no-console */
'use strict';

const operation = process.argv[2];
const numbers = process.argv.slice(3).filter(item => isFinite(Number(item)));

if (!['add', 'mutiply'].includes(operation)) {
  return console.log('Operation is not supported!');
}

if (numbers.length === 0) {
  return console.log(`There is nothing to ${operation}`);
}

const result = numbers
  .map(Number)
  .reduce((acc, item) => {
    switch (operation) {
      case 'add':
        return acc + item;
      case 'mutiply':
        return acc * item;
      default:
        return 0;
    }
  }, operation === 'add' ? 0 : 1);

console.log(result);
