/* eslint-disable no-console */
'use strict';

const [operation, ...args] = process.argv.slice(2);

const operands = args
  .filter(value => !isNaN(value))
  .map(value => +value);

if (!operands.length) {
  console.log(`There is nothing to ${operation}`);

  process.exit();
}

switch (operation) {
  case 'add': {
    console.log(operands.reduce((sum, value) => sum + value));
    break;
  }

  case 'multiply': {
    console.log(operands.reduce((sum, value) => sum * value, 1));
    break;
  }

  default:
    console.log('Operation is not supported!');
}
