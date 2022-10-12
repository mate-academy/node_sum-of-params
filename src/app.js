/* eslint-disable no-console */
'use strict';

function operate(oper, nums) {
  if (oper !== 'add' && oper !== 'multiply') {
    return 'Operation is not supported!';
  }

  if (!nums.length) {
    return `There is nothing to ${operation}`;
  }

  if (oper === 'add') {
    return nums.reduce((sum, number) => sum + Number(number), 0);
  }

  return nums.reduce((sum, number) => sum * Number(number), 1);
}

const operation = process.argv[2];
const numbers = process.argv.slice(3).filter(n => +n);

console.log(operate(operation, numbers));
