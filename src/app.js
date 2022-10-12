'use strict';

const [operation, ...args] = process.argv.slice(2);

const argsFilter = args.filter(num => !isNaN(Number(num)));

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

// eslint-disable-next-line no-console
console.log(operationResult);
