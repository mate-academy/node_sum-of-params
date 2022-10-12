/* eslint-disable no-console */
'use strict';

const numbers = process.argv.slice(3).filter((n) => +n);
const operation = process.argv[2];

if (!numbers.length) {
  console.log(`There is nothing to ${operation}`);
} else {
  if (operation === 'add') {
    console.log(numbers.reduce((number, total) => number + total, 0));
  } else if (operation === 'multiply') {
    console.log(numbers.reduce((number, total) => number * total, 1));
  } else {
    console.log('Operation is not supported!');
  }
}
