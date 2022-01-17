'use strict';

const argv = process.argv.slice(2);

const getResult = params => {
  const values = params.slice(1).map(Number).filter(Boolean);

  if (values.length === 0) {
    return 'There is nothing to add (or multiply)';
  }

  switch (params[0]) {
    case 'add':
      return add(values);
    case 'multiply':
      return multiply(values);
    default:
      return 'Operation is not supported!';
  }
};

function add(params) {
  return params.reduce((acc, num) => {
    return acc + parseInt(num);
  }, 0);
}

function multiply(params) {
  return params.reduce((acc, num) => {
    return acc * parseInt(num);
  });
}

getResult(argv);
