'use strict';

const minimist = require('minimist');

const inputArray = minimist(process.argv.slice(2))._;

const add = () => {
  let total = 0;

  for (let i = 1; i < inputArray.length; i++) {
    total += inputArray[i];
  }

  return total;
};

const multiply = () => {
  let total = 1;

  if (inputArray.length < 2) {
    return 'Nothing to multiply';
  }

  for (let i = 1; i < inputArray.length; i++) {
    total *= inputArray[i];
  }

  return total;
};

const result = () => {
  if (inputArray[0] === 'add') {
    return add();
  } else if (inputArray[0] === 'multiply') {
    return multiply();
  } else {
    return 'Operation not supported';
  }
};

// eslint-disable-next-line no-console
console.log(result());
