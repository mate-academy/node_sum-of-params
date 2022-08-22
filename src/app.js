'use strict';

function getCalculation(arr) {
  const nums = arr.slice(3)
    .map(num => +num)
    .filter(num => !isNaN(num));

  const operator = arr[2];

  if (nums.length === 0) {
    return 'There is nothing to add (or multiply)';
  }

  function getPhrase(operation) {
    return `There is nothing to ${operation}`;
  }

  switch (operator) {
    case 'add':
      return nums.length
        ? nums.reduce((sum, cur) => sum + cur)
        : getPhrase('add');

    case 'multiply':
      return nums.length
        ? nums.reduce((product, cur) => product * cur)
        : getPhrase('multiply');

    default:
      return 'Operation is not supported!';
  }
}

// eslint-disable-next-line no-console
console.log(getCalculation(process.argv));
