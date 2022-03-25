/* eslint-disable no-console */
'use strict';

const processParams = () => {
  const action = process.argv[2];

  const add = () => {
    const sum = process.argv.slice(3)
      .filter(element => !isNaN(element))
      .reduce((a, b) => Number(a) + Number(b), 0);

    return sum === 0 ? `There is nothing to add` : sum;
  };

  const multiply = () => {
    const result = process.argv.slice(3)
      .filter(element => !isNaN(element))
      .reduce((a, b) => Number(a) * Number(b), 1);

    return result === 1 ? `There is nothing to multiply` : result;
  };

  switch (action) {
    case 'add':
      console.log(add());
      break;
    case 'multiply':
      console.log(multiply());
      break;
    default:
      console.log('Operation is not supported!');
  }
};

processParams();
