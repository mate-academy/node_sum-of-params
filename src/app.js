/* eslint-disable no-console */
'use strict';

const { add } = require('./add');
const { multiply } = require('./multiply');

const primitiveCalculator = (operation, ...params) => {
  const messages = {
    noData: 'There\'s nothing to add',
    unknownOperation: 'Operation is not supported!',
    naughtyUser: 'Don\'t be naughty and use numbers only next time you call me',
  };

  if (params.length < 1) {
    return messages.noData;
  }

  const preparedParams = params
    .map(param => +param)
    .filter(num => num || num === 0);

  if (preparedParams.length < 1 || preparedParams.some(isNaN)) {
    return messages.noData;
  }

  if (preparedParams.length !== params.length) {
    console.log(messages.naughtyUser);
  }

  switch (operation) {
    case 'add':
      return add(preparedParams);
    case 'multiply':
      return multiply(preparedParams);
    default:
      return messages.unknownOperation;
  }
};

console.log(
  primitiveCalculator(process.argv[2], ...process.argv.slice(3)),
);
