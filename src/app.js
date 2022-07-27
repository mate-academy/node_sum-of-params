'use strict';

// eslint-disable-next-line no-unused-vars
const [_, __, mathOperation, ...numbers] = process.argv;

const hasNumber = numbers.some(num => Number.isInteger(+num));
let result;

switch (mathOperation) {
  case 'add':
    if (hasNumber) {
      numbers.forEach(number => {
        if (Number.isInteger(+number)) {
          result += +number;
        }
      });
    } else {
      result = 'There is nothing to add';
    }
    break;
  case 'multiply':
    if (hasNumber) {
      numbers.forEach(number => {
        if (Number.isInteger(+number)) {
          result *= number;
        }
      });
    } else {
      result = 'There is nothing to multiply';
    }
    break;
  default:
    result = 'Operation is not supported!';
}

// eslint-disable-next-line no-console
console.log(result);
