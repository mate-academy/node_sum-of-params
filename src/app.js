/* eslint-disable no-console */
'use strict';

const terminal = (process.argv).slice(2);

const prepareArray = terminal.slice(1).map(el => Number(el));

for (let i = 0; i < prepareArray.length; i++) {
  if (isNaN(prepareArray[i]) === true) {
    prepareArray.splice(i, 1);
  }
}

if (!prepareArray.length) {
  console.log('There is nothing to add (or multiply)');
} else {
  if (terminal[0] === 'add') {
    terminal.splice(0, 1);

    console.log(prepareArray.reduce((arg, acc) => arg + acc));
  } else if (terminal[0] === 'multiply') {
    terminal.splice(0, 1);

    console.log(prepareArray.reduce((arg, acc) => arg * acc));
  } else {
    console.log('Operation is not supported!');
  }
}
