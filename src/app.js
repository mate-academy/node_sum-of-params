/* eslint-disable no-console */
'use strict';

function operate(oper, nums) {
  if (!nums.length) {
    return `There is nothing to ${operation}`;
  }

  switch (oper) {
    case 'add':
      return nums.reduce((sum, number) => sum + Number(number), 0);
    case 'multiply':
      return nums.reduce((sum, number) => sum * Number(number), 1);
    default:
      return 'Operation is not supported!';
  }
}

const operation = process.argv[2];
const numbers = process.argv.slice(3).filter(n => +n);

console.log(operate(operation, numbers));
