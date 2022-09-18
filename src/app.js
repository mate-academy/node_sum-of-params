'use strict';

const minimist = require('minimist');

const { _: [act, ...num] } = minimist(process.argv.slice(2));

const isNumber = (data) => {
  return typeof data === 'number';
};

const calc = (action, numbers) => {
  if (action !== 'add' && action !== 'multiply') {
    return 'Operation is not supported!';
  }

  if (numbers.length === 0) {
    return `There is nothing to ${action}`;
  }

  return numbers.reduce((prev, curr) => {
    if (!isNumber(prev)) {
      return curr;
    }

    if (!isNumber(curr)) {
      return prev;
    }

    if (action === 'add') {
      return prev + curr;
    }

    if (action === 'multiply') {
      return prev * curr;
    }
  }, action === 'add' ? 0 : 1);
};

// eslint-disable-next-line no-console
console.log(calc(act, num));
