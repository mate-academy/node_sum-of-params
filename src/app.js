/* eslint-disable no-console */
'use strict';

const [, , operator, ...num] = process.argv;

const charsIsNumber = num.some(digit => typeof Number(digit) === 'number');
let result;

switch (operator) {
  case 'multiply':

    if (charsIsNumber) {
      result = num.reduce((res, item) => {
        if (typeof Number(item) === 'number') {
          return res * item;
        }
      });
    } else {
      result = 'There is nothing to multiply';
    }
    break;

  case 'add':
    if (charsIsNumber) {
      result = num.reduce((res, item) => {
        if (typeof Number(item) === 'number') {
          return res + (+item);
        }
      }, +0);
    } else {
      result = 'There is nothing to add';
    }
    break;

  default:
    result = 'Operation is not supported!';
}

console.log(result);
