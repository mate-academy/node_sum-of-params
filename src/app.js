/* eslint-disable no-console */
'use strict';

const add = (arr) => (
  arr.reduce((prev, current) => prev + current, 0)
);

const multiply = (arr) => (
  arr.reduce((prev, current) => prev * current, 1)
);

const getResult = params => {
  const actions = {
    add,
    multiply,
  };
  const action = params[0];

  if (!Object.keys(actions).includes(action)) {
    console.log('Operation is not supported!');

    return;
  }

  const values = params.slice(1).map(el => Number(el)).filter(Boolean);

  if (values.length === 0) {
    console.log(`There is nothing to ${action}`);

    return;
  }

  const result = actions[action](values);

  console.log(result);
};

const argv = process.argv.slice(2);

getResult(argv);
