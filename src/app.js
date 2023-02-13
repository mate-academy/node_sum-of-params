/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');

const [operator, ...rest] = minimist(process.argv.slice(2))._;

const filtered = rest
  .map(item => Number(item))
  .filter(item => !isNaN(item));

console.log(filtered);

const add = () => {
  return filtered.reduce((total, item) => total + item, 0);
};

const multiply = () => {
  return filtered.reduce((total, item) => total * item, 1);
};

const result = () => {
  if (filtered.length === 0) {
    console.log(`There is nothing to ${operator}`);
  }

  if (operator === 'add') {
    return add();
  } else if (operator === 'multiply') {
    return multiply();
  } else {
    return 'Operation not supported';
  }
};

// eslint-disable-next-line no-console
console.log(result());
