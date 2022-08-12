'use strict';

const [, , operation, ...numbers] = process.argv;

const hasNumbers = numbers.some(element => typeof Number(element) === 'number');
let result;

switch (operation) {
  case 'multiply':
    if (hasNumbers) {
      numbers.forEach(element => {
        if (typeof Number(element) === 'number') {
          result *= element;
        }
      });
    } else {
      result = 'There is nothing to multiply';
    }
    break;

  case 'add':
    if (hasNumbers) {
      numbers.forEach(element => {
        if (typeof Number(element) === 'number') {
          result += element;
        }
      });
    } else {
      result = 'There is nothing to add';
    }
    break;

  default:
    result = 'Operation is not supported!';
}

// eslint-disable-next-line no-console
console.log(result);
