'use strict';

const [operationName, ...params] = process.argv.slice(2);

const calculate = (operation, values) => {
  const numericValues = values.filter(value => +value);

  if (numericValues.length === 0) {
    // eslint-disable-next-line no-console
    console.log('There is nothing to add (or multiply)');

    return;
  }

  switch (operation) {
    case 'add':
      return numericValues.reduce((prev, curr) => +prev + +curr, 0);
    case 'multiply':
      return numericValues.reduce((prev, curr) => +prev * +curr);
    default:
      // eslint-disable-next-line no-console
      console.log('Operation is not supported!');
  }
};

// eslint-disable-next-line no-console
console.log(
  calculate(operationName, params)
);
