'use strict';

const inputNumbers = process.argv.slice(3)
  .filter((item) => !isNaN(+item)).map(item => +item);

const inputAction = process.argv[2];

function calculations(action, numbers) {
  if (numbers.length === 0) {

    return 'There is nothing to ' + action;
  }

  switch (action) {
    case 'add':

      return numbers.reduce((a, b) => +a + +b);

    case 'multiply':

      return numbers.reduce((a, b) => +a * +b);

    default:
      
      return 'Operation is not supported!';
  }
}

calculations(inputAction, inputNumbers);
