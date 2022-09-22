'use strict';

const arrayOfArgs = process.argv.slice(2);
const action = arrayOfArgs.splice(0, 1)[0];
const arrayOfNumbers = arrayOfArgs.filter(element => +element);

const getResult = () => {
  if (action !== 'add' && action !== 'multiply') {
    return 'Operation is not supported!';
  }

  if (arrayOfNumbers.length === 0) {
    return `There is nothing to ${action}`;
  }

  return action === 'add'
    ? arrayOfNumbers.reduce((prev, number) => prev + +number, 0)
    : arrayOfNumbers.reduce((prev, number) => prev * +number, 1)
}

console.log(getResult());
