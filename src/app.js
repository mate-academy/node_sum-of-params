/* eslint-disable no-console */
'use strict';

const [, , operation, ...values] = process.argv;
const numbers = values.filter(value => !isNaN(value));

let result = `There is nothing to ${operation}`;

switch (operation) {
  case 'add':
    if (!numbers.length) {
      break;
    };

    result = numbers.reduce((sum, number) => (+sum) + (+number));
    break;

  case 'multiply':
    if (!numbers.length) {
      break;
    };

    result = numbers.reduce((sum, number) => (+sum) * (+number));
    break;

  default:
    result = 'Operation is not supported!';
};

console.log(result);
