'use strict';

const argv = require('minimist')(process.argv.slice(2));

const command = argv._[0];
const params = argv._.slice(1).filter(el =>
  typeof el === 'number') || [];

const commands = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
};

if (!(command in commands)) {
  console.log(`Operation is not supported!`);
}

if (params.length < 1) {
  console.log(`There is nothing to ${command}`);

  return;
}

if (command === 'add') {
  console.log(params.reduce(commands.add));
}

if (command === 'multiply') {
  console.log(params.reduce(commands.multiply));
}
