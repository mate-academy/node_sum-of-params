'use strict';

// eslint-disable-next-line no-console
const log = console.log;

const [operation, ...operands] = process.argv.slice(2);
const operandsPrepared = operands
  .map(num => isNaN(+num) ? null : +num)
  .filter(num => num !== null);

if (!operandsPrepared.length) {
  log(`There is nothing to ${operation}`);

  process.exit();
}

switch (operation) {
  case 'add': {
    const operationResult = operandsPrepared.reduce((sum, o) => sum + o, 0);

    log(operationResult);
    break;
  }

  case 'multiply': {
    const operationResult = operandsPrepared.reduce((mult, o) => mult * o, 1);

    log(operationResult);
    break;
  }

  default:
    log('Operation is not supported!');
}
