/* eslint-disable no-console */
'use strict';

const operation = process.argv[2];
const nums = process.argv
  .slice(3)
  .filter(item => !isNaN(Number(item)))
  .map(item => Number(item));

const supportedOperations = ['add', 'multiply'];

const getResult = () => {
  if (!supportedOperations.includes(operation)) {
    return 'Operation is not supported!';
  }

  if (nums.length < 1) {
    return `There is nothing to ${operation}`;
  }

  if (operation === 'add') {
    return nums.reduce((prev, current) => prev + current);
  }

  return nums.reduce((prev, current) => prev * current);
};

console.log(getResult());
