'use strict';

const { add } = require('./add');
const { multiply } = require('./multiply');

const operation = Object.values(process.argv.slice(2, 3)).flat()[0];
const params = Object.values(process.argv.slice(3)).flat();

switch (operation) {
  case 'add':
    return add(params);

  case 'multiply':
    return multiply(params);

  default:
    return 'Operation is not supported!';
}
