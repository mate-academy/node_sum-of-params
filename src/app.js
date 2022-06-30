/* eslint-disable no-console */
'use strict';

const terminal = (process.argv).slice(2);

if (terminal[0] === 'add') {
  terminal.splice(0, 1);

  const prepareArray = terminal.map(el => Number(el));

  console.log(prepareArray.reduce((arg, acc) => arg + acc));
} else if (terminal[0] === 'multiply') {
  terminal.splice(0, 1);

  const prepareArray = terminal.map(el => Number(el));

  console.log(prepareArray.reduce((arg, acc) => arg * acc));
} else {
  console.log('Operation is not supported!');
}
