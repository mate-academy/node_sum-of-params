'use strict';

const operation = process.argv[2];
const params = process.argv.slice(3);

const calculate = () => {
  if (!params.length) {
    return 'There is nothing to add';
  }

  switch (operation) {
    case 'add':
      return params.reduce((a, b) => Number(a) + Number(b));

    case 'multiply':
      return params.reduce((a, b) => Number(a) * Number(b));

    default:
      return 'Operation is not supported';
  }
};

const output = String(calculate());

process.stdout.write(output);
