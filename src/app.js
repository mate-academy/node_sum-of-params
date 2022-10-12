/* eslint-disable no-console */
'use strict';

const operation = process.argv[2];
const values = process.argv
  .slice(3)
  .map(value => Number(value))
  .filter(value => typeof value === 'number');

if (values.length === 0) {
  console.log(`There is nothing to ${operation}`);
}

switch (operation) {
  case 'add':
    console.log(values.reduce((value, sum) => value + sum, 0));
    break;
  case 'multiply':
    console.log(values.reduce((value, multiply) => value * multiply, 1));
    break;
  default:
    console.log('Operation is not supported!');
};
