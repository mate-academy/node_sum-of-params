'use strict';

function calculator(array) {
  const arrayOfNumbers = array.slice(1);
  let count = 0;

  if (array[0] === 'add') {
    if (arrayOfNumbers.length === 0) {
      return 'There is nothing to add';
    };

    const answer = arrayOfNumbers.reduce((acc, cur) => {
      if (!isNaN(+cur)) {
        count++;

        return acc + +cur;
      } else {
        return acc;
      }
    }, 0);

    if (count > 0) {
      return answer;
    } else {
      return 'There is nothing to multiply';
    };
  };

  if (array[0] === 'multiply') {
    if (arrayOfNumbers.length === 0) {
      return 'There is nothing to multiply';
    };

    const answer = arrayOfNumbers.reduce((acc, cur) => {
      if (!isNaN(+cur)) {
        count++;

        return acc * +cur;
      } else {
        return acc;
      }
    }, 1);

    if (count > 0) {
      return answer;
    } else {
      return 'There is nothing to multiply';
    };
  };

  return 'Operation is not supported!';
};

const params = process.argv.slice(2);

calculator(params);
