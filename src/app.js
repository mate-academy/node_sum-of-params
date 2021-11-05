'use strict';

const ADD = 'add';
const MULTIPLY = 'multiply';
const NO_OPERATOR = 'There is no operator';
const NOT_SUPPORTED = 'Operation is not supported!';
const SOMETHING_WENT_WRONG = 'Something went wrong';
const NO_NUMBERS = (operator) => `There is nothing to ${operator}`;

const getData = ([operator, ...rest]) => {
  if (!operator) {
    return NO_OPERATOR;
  }

  if (operator !== ADD && operator !== MULTIPLY) {
    return NOT_SUPPORTED;
  }

  const numbers = rest.filter((param) => !isNaN(+param));

  if (!numbers.length) {
    return NO_NUMBERS(operator);
  }

  switch (operator) {
    case ADD:
      return numbers.reduce((acc, num) => acc + +num, 0);

    case MULTIPLY:
      return numbers.reduce((acc, num) => acc * +num, 1);

    default:
      return SOMETHING_WENT_WRONG;
  }
};

// eslint-disable-next-line no-console
console.log(
  getData(process.argv.slice(2))
);
