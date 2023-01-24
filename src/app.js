'use strict';

const add = args => (
  args.reduce((prev, cur) => prev + cur, 0)
);

const multiply = args => (
  args.reduce((prev, cur) => prev * cur, 1)
);

const getResult = params => {
  const actions = {
    add,
    multiply,
  };
  const action = params[0];

  if (!Object.keys(actions).includes(action)) {
    console.log('Operation is not supported!')

    return;
  }

  const values = params.slice(1).map(Number).filter(Boolean);

  if (values.length === 0) {
    console.log(`There is nothing to ${action}`);

    return;
  }

  const result = actions[action](values);

  console.log(result);
};

const argv = process.argv.slice(2);

getResult(argv);
