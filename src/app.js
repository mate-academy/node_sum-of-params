'use strict';

const operations = {
  add: 'add', multiply: 'multiply',
};
const operation = process.argv[2];
const args = process.argv.slice(3);

if (operation === operations.add) {
  if (args.length > 1) {
    const sum = args.reduce((prevVal, currVal) => {
      return +prevVal + +currVal;
    }, 0);

    return sum;
  } else {
    return 'There is nothing to add';
  }
} else if (operation === operations.multiply) {
  if (args.length > 1) {
    const mult = args.reduce((prevVal, currVal) => {
      return +prevVal * +currVal;
    }, 1);

    return mult;
  } else {
    return 'There is nothing to multiply';
  }
} else {
  return 'Operation is not supported!';
}
