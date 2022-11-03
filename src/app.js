/* eslint-disable no-console */
'use strict';

const { add } = require('./add.js');
const { multiply } = require('./multiply');

console.log(typeof add);

if (process.argv[2] === 'add') {
  console.log(add(process.argv.slice(3)));
}

if (process.argv[2] === 'multiply') {
  console.log(multiply(process.argv.slice(3)));
}
