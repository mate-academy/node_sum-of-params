'use strict';

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const char = process.argv[2];
const numbers = process.argv.slice(3);
const arrOfNumbers = numbers.filter(par => Number(par))
  .map(numb => Number(numb));


switch (char) {
  case 'add':
    if (arrOfNumbers.length !== 0) {
      console.log(
        arrOfNumbers.reduce((acc, x) => acc + x, 0)
      );
      break;
    }
    console.log('There is nothing to add')
    break;
  case 'multiply':
    if (arrOfNumbers.length !== 0) {
      console.log(
        arrOfNumbers.reduce((acc, x) => acc * x, 1)
      );
      break;
    }
    console.log('There is nothing to multiply');
    break
  default:
    console.log('Operation is not supported!');
};

rl.close();
