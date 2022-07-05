'use strict';

const [operationName, ...params] = process.argv.slice(2);

const calculate = (operation, values) => {
  const numericValues = values.filter(x => +x);

  if (numericValues.length === 0) {
    console.log('There is nothing to add (or multiply)');

    return;
  }

  switch (operation) {
    case 'add':
      return numericValues.reduce((prev, curr) => Number(prev) + Number(curr), 0);
    case 'multiply':
      return numericValues.reduce((prev, curr) => Number(prev) * Number(curr));
    default:
      // eslint-disable-next-line
      console.log('Operation is not supported!');
  }
};

// eslint-disable-next-line
console.log(
  calculate(operationName, params)
);
