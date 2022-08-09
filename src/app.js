'use strict';
/* eslint-disable no-console */

const calculateParamsFromCommandLine = (operation, params) => {
  const isAllowedOperation = operation === 'add' || operation === 'multiply';

  if (!isAllowedOperation) {
    return console.log('Operation is not supported!');
  }

  if (!params.length) {
    return console.log(`There is nothing to ${operation}`);
  }

  const initialValue = operation === 'add' ? 0 : 1;
  const calculateParams = (prevVal, currVal) => operation === 'add'
    ? prevVal + currVal
    : prevVal * currVal;
  const calculatedValue = params.reduce(calculateParams, initialValue);

  console.log(calculatedValue);
};

const handleCommandLineParams = (params) => {
  const validParams = [];

  params.forEach(param => {
    !isNaN(Number(param)) && validParams.push(Number(param));
  });
  calculateParamsFromCommandLine(params[2], validParams);
};

handleCommandLineParams(process.argv);
