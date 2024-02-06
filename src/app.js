/* eslint-disable no-console */
'use strict';

const actions = {
  add: 'add',
  multiply: 'multiply',
};

const args = process.argv.slice(2);
const action = args[0];
const numericValues = args.slice(1).map((value) => {
  if (+value) {
    return +value;
  }
});

if (numericValues.length === 0) {
  console.log(`There is nothing to ${action}}`);
}

const getSumOfArray = (array) =>
  array.reduce((acc, currValue) => acc + currValue, 0);

const getMultiplyOfArray = (array) =>
  array.reduce((acc, currValue) => acc * currValue, 0);

switch (action) {
  case actions.add:
    console.log(getSumOfArray(numericValues));
    break;
  case actions.multiply:
    console.log(getMultiplyOfArray(numericValues));
    break;
  default:
    console.log('Operation is not supported!');
}
