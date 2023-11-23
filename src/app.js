'use strict';

const [operation, ...values] = process.argv.slice(2);

const numeratedValues = values.map((value) => {
  return Number(value);
});

const nanRemovedNumbers = numeratedValues.filter((value) => !isNaN(value));

const add = (numberArray) => {
  return numberArray.reduce((total, addition) => total + addition, 0);
};

const multiply = (numberArray) => {
  return numberArray.reduce((total, addition) => total * addition, 1);
};

switch (operation) {
  case 'add':
    if (!nanRemovedNumbers.length) {
      return 'There is nothing to add';
    }
    add(nanRemovedNumbers);
    break;
  case 'multiply':
    if (!nanRemovedNumbers.length) {
      return 'There is nothing to multiply';
    }
    multiply(nanRemovedNumbers);
    break;
  default:
    return 'Operation is not supported!';
}
