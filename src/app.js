/* eslint-disable no-console */
'use strict';

const [operation, ...args] = process.argv.slice(2);

const argsFilter = args
  .map(el => Number(el))
  .filter(num => !isNaN(Number(num)));

if (argsFilter.length === 0) {
  console.log(`There is nothing to ${operation}`);
}

let operationResult;

switch (operation) {
  case 'add':
    operationResult = argsFilter.reduce((a, b) => a + b, 0);
    break;

  case 'multiply':
    operationResult = argsFilter.reduce((a, b) => a * b, 1);
    break;

  default:
    operationResult = 'Operation is not supported!';
}

console.log(operationResult);
