/* eslint-disable no-console */
'use strict';

const params = process.argv.slice(2);

const addOrMultiply = (array) => {
  let result = +array[1];

  for (let i = 2; i < array.length; i++) {
    if (isNaN(+array[i])) {
      continue;
    }

    if (array[0] === 'add') {
      result += +array[i];
    }

    if (array[0] === 'multiply') {
      result *= +array[i];
    }
  };

  return result;
};

if (params[0] === 'add' || params[0] === 'multiply') {
  const result = addOrMultiply(params);

  if (isNaN(result)) {
    console.log(`There is nothing to ${params[0]}`);
  } else {
    console.log(result);
  }
} else {
  console.log('Operation is not supported!');
}
