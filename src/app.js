'use strict';

const getSum = (nums) => {
  return nums.reduce((previous, current) => previous + current);
};

const getMultiplied = (nums) => {
  return nums.reduce((previous, current) => previous * current);
};

function getResult(enteredData) {
  const operation = enteredData[0];
  const numbers = enteredData.slice(1).filter(item => !isNaN(+item));

  if (!numbers.length) {
    return `There is nothing to ${operation}`;
  }

  switch (operation) {
    case ('add'):
      return getSum(numbers);
    case ('multiply'):
      return getMultiplied(numbers);
    default:
      return 'Operation is not supported!';
  }
}

// eslint-disable-next-line no-console
console.log(getResult(process.argv.slice(2)));
