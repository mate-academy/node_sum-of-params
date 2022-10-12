/* eslint-disable no-console */
'use strict';

const operation = String(process.argv.splice(2, 1));
const nums = process.argv.slice(2).map(num => !isNaN(num)
  ? Number(num)
  : null);

if (nums.length === 0) {
  console.log(`There is nothing to ${operation}`);
}

switch (operation) {
  case 'add':
    console.log(nums.reduce((a, b) => a + b));
    break;

  case 'multiply':
    console.log(nums.reduce((a, b) => a * b));
    break;

  default:
    console.log('Operation is not supported!');
}
