/* eslint-disable no-console */
/* eslint-disable no-fallthrough */

import dotenv from 'dotenv';

dotenv.config();

const arrOfValues = process.argv.slice(2);

console.log(process.argv.slice(2));

let multiply = false;
let add = false;
const result = [];

for (const key of arrOfValues) {
  switch (true) {
    case key === 'add':
      add = true;
      continue;
    case key === 'multiply':
      multiply = true;
      continue;
    case isNaN(+key) :
      continue;
    default:
      result.push(+key);
  }
}
console.log(result);

switch (true) {
  case result.lenght === 0 && add :
    console.log(`There is nothing to add`);
  case result.length === 0 && multiply :
    console.log(`There is nothing to multiply`);
    break;
  case add :
    console.log(result.reduce((prev, curr) => prev + curr));
    break;
  case multiply :
    console.log(result.reduce((prev, curr) => prev * curr));
    break;
  default:
    console.log(`Operation is not supported!`);
}
