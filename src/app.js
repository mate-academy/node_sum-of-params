/* eslint-disable no-console */
'use strict';

const calculate = () => {
  const [operation, ...values] = process.argv.slice(2);
  const numericValues = values.filter((value) => +value);

  if (operation === 'add' && !numericValues.length) {
    return 'There is nothing to add';
  } else if (operation === 'multiply' && !numericValues.length) {
    return 'There is nothing to multiply';
  }

  switch (operation) {
    case 'add':
      return numericValues.reduce((prev, curr) => +prev + +curr, 0);
    case 'multiply':
      return numericValues.reduce((prev, curr) => +prev * +curr, 1);
    default:
      return 'Operation is not supported!';
  }
};

console.log(calculate());
