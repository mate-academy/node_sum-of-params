/* eslint-disable no-console */
'use strict';

const command = process.argv.slice(2);
const result = [...command.slice(1)];

if (command[0] === 'add' && result.length) {
  return console.log(result.reduce((sum, n) => +sum + (+n), 0));
}

if (command[0] === 'add' && !result.length) {
  return console.log('There is nothing to add');
}

if (command[0] === 'multiply' && result.length) {
  return console.log(result.reduce((sum, n) => sum * n));
}

if (command[0] === 'multiply' && !result.length) {
  return console.log('There is nothing to multiply');
}

return console.log('Operation is not supported!');
