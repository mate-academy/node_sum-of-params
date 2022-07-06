/* eslint-disable no-console */
'use strict';

const terminal = (process.argv).slice(2);

const preparedArray = terminal.slice(1).map(el => Number(el));

for (let i = preparedArray.length; i >= 0; i--) {
  if (isNaN(preparedArray[i]) === true) {
    preparedArray.splice(i, 1);
  }
}

if (!preparedArray.length) {
  console.log('There is nothing to add (or multiply)');
} else {
  if (terminal[0] === 'add') {
    terminal.splice(0, 1);

    console.log(preparedArray.reduce((arg, acc) => arg + acc));
  } else if (terminal[0] === 'multiply') {
    terminal.splice(0, 1);

    console.log(preparedArray.reduce((arg, acc) => arg * acc));
  } else {
    console.log('Operation is not supported!');
  }
}
