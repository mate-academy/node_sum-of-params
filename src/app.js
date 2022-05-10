/* eslint-disable no-console */
'use strict';

const args = process.argv.slice(2);
const operation = args[0];
const values = args.slice(1);
const numericValues = values.filter(value => !Number.isNaN(+value)).map(Number);
const hasNumericValues = numericValues.length > 0;
const noNumericValuesError = `there is nothing to ${operation}`;
const unknownOperationError = 'operation is not supported';
const sumCallback = (sum, curr) => sum + curr;
const multiplyCallback = (product, curr) => product * curr;

switch (operation) {
  case 'add':
    console.log(hasNumericValues
      ? numericValues.reduce(sumCallback)
      : noNumericValuesError);
    break;
  case 'multiply':
    console.log(hasNumericValues
      ? numericValues.reduce(multiplyCallback)
      : noNumericValuesError);
    break;
  default:
    console.log(unknownOperationError);
}
