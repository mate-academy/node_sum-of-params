/* eslint-disable no-console */
'use strict';

const [method, ...args] = process.argv.slice(2);

const filtered = args.map(Number).filter(item => !isNaN(item));

if (!filtered.length) {
  console.log(`There is nothing to ${method} `);

  return;
};

switch (method) {
  case 'add':
    console.log(filtered.reduce((a, b) => a + b, 0));
    break;
  case 'multiply':
    console.log(filtered.reduce((a, b) => a * b, 1));
    break;
  default:
    console.log('Operation is not supported!');
}
