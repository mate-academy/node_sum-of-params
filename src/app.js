'use strict';

const value = process.argv.slice(2);

const checkNumber = (valueArray) => {
  let hasNumber = false;

  for (let i = 1; i < valueArray.length; i++) {
    if (!isNaN(valueArray[i])) {
      hasNumber = true;
    }
  }

  return hasNumber;
};

const add = (valueArray) => {
  let result = 0;

  if (checkNumber(valueArray)) {
    for (let i = 0; i <= valueArray.length - 1; i++) {
      if (!isNaN(valueArray[i])) {
        result += parseInt(valueArray[i]);
      }
    }
  } else {
    return 'There is nothing to add';
  }

  return result;
};

const multiply = (valueArray) => {
  let result = 1;

  if (checkNumber(valueArray)) {
    for (let i = 0; i <= valueArray.length - 1; i++) {
      if (!isNaN(valueArray[i])) {
        result *= parseInt(valueArray[i]);
      }
    }
  } else {
    return 'There is nothing to multiply';
  }

  return result;
};

switch (value[0]) {
  case 'add':
    add(value);
    break;

  case 'multiply':
    multiply(value);
    break;

  default:
    return 'Operation is not supported!';
}
