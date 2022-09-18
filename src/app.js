/* eslint-disable no-console */
'use strict';

function getOperationCallback(desiredOperation) {
  switch (desiredOperation) {
    case 'add':
      return (accumulator, number) => (accumulator + number);

    case 'multiply':
      return (accumulator, number) => (accumulator * number);

    default:
      console.error('Operation is not supported!');
      process.exit(0);
  }
}

const operation = process.argv[2];

const operationCallback = getOperationCallback(operation);

const numericValues = process.argv.slice(3)
  .map(arg => Number(arg))
  .filter(number => (!Number.isNaN(number)));

console.log(numericValues);

if (numericValues.length === 0) {
  console.log(`There is nothing to ${operation}`);

  process.exit(0);
}

const operationResult = numericValues.reduce(operationCallback);

console.log('The operation result: ', operationResult);
