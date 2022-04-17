/* eslint-disable no-console */
'use strict';

const { sumOfArray } = require('./sumOfArray');
const { skipStringInArray } = require('./skipStringValue');
const { multiply } = require('./multiply');

const operation = process.argv[2];

const operants = skipStringInArray(process.argv.slice(3));

let result;

switch (operation) {
  case 'add':
    result = sumOfArray(operants);
    break;
  case 'multiply':
    result = multiply(operants);
    break;
  default:
    console.log('Operation is not supported!');
}

console.log(result);
