'use strict';

const dotenv = require('dotenv');
const minimist = require('minimist');
// import minimist from 'minimist';

dotenv.config();

function calcalate(values) {
  const valuesArray = values._.slice(1);
  const operationName = values._[0];

  if (operationName !== 'add' && operationName !== 'multiply') {
    return 'Operation is not supported!';
  }

  if (valuesArray.map(el => typeof (el) === 'number').includes(false)) {
    return `There is nothing to ${operationName}`;
  }

  if (operationName === 'add') {
    return valuesArray.reduce((a, b) => a + b);
  }

  if (operationName === 'multiply') {
    return valuesArray.reduce((a, b) => a * b);
  }
};

calcalate(minimist(process.argv.slice(2)));
