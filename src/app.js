/* eslint-disable no-console */
'use strict';

const params = process.argv.slice(2);
let result;
let isNumericValues = false;
let isOperationSupported = true;

switch (params[0]) {
  case 'add':
    result = 0;

    for (let i = 1; i < params.length; i++) {
      if (!isNaN(+params[i])) {
        isNumericValues = true;
        result += +params[i];
      }
    }
    break;
  case 'multiply':
    result = 1;

    for (let i = 1; i < params.length; i++) {
      if (!isNaN(+params[i])) {
        isNumericValues = true;
        result *= +params[i];
      }
    }
    break;
  default:
    console.log('Operation is not supported');
    isOperationSupported = false;
}

if (isNumericValues) {
  console.log(result);
} else if (isOperationSupported) {
  console.log('There is nothing to add');
}
