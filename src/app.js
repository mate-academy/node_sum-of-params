'use strict';

const operation = process.argv[2];

const operands = process.argv.slice(3)
  .filter(n => !isNaN(Number(n)))
  .map(n => Number(n));

const result = {
  add: operands.reduce((a, b) => a + b, 0),
  multiply: operands.reduce((a, b) => a * b, 1),
};

let message = result[operation];

switch (true) {
  case !(operation in result):
    message = 'Operation is not supported!';
    break;

  case !operands.length:
    message = 'There is nothing to add';
    break;

  default: break;
}

// eslint-disable-next-line no-console
console.log(message);
