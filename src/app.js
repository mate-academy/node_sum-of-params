'use strict';

const argumnets = process.argv.slice(3);
const operation = process.argv[2];

function getResultMessage() {
  switch (operation) {
    case 'add':
      return add(argumnets);
    case 'mutiply':
      return multiply(argumnets);

    default:
      return 'Operation is not supported!';
  }
}

function errorMessage() {
  return `There is nothing to ${operation}`;
}

function add(args) {
  const filteredArguments = args.filter(arg => !isNaN(Number(arg)));

  if (!filteredArguments.length) {
    return errorMessage();
  }

  const result = filteredArguments.reduce((prev, cur) => {
    return Number(prev) + Number(cur);
  }, 0);

  return result;
}

function multiply(args) {
  const filteredArguments = args.filter(arg => !isNaN(Number(arg)));

  if (!filteredArguments.length) {
    return errorMessage();
  }

  const result = filteredArguments.reduce((prev, cur) => {
    return Number(prev) * Number(cur);
  }, 1);

  return result;
}

// eslint-disable-next-line no-console
console.log(getResultMessage());
