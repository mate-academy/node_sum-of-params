'use strict';

// import * as readline from 'node:readline';
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('enter operator and numbers: ', (inpTer) => {
  const arr = inpTer.split(' ');

  switch (arr[0]) {
    case 'add':
      resOperation(arr, '+');
      break;
    case 'mutiply':
      resOperation(arr, '*');
      break;

    default:
      txt();
      break;
  }

  terminal.close();
});

function resOperation(arr, opp) {
  const resArr = [];
  let res = 0;

  for (let i = 1; i < arr.length; i++) {
    if (+arr[i]) {
      resArr.push(+arr[i]);
    }
  }

  if (resArr.length === 0) {
    return `There is nothing to add`;
  }

  if (opp === '+') {
    for (let index = 0; index < resArr.length; index++) {
      if (+resArr[index]) {
        res += resArr[index];
      }
    }

    return res;
  }

  if (opp === '*') {
    res = 1;

    for (let index = 0; index < resArr.length; index++) {
      if (+resArr[index]) {
        res *= resArr[index];
      }
    }

    return res;
  }
}

function txt() {
  return 'Operation is not supported!';
}
