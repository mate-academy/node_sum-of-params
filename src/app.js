'use strict';
/* eslint-disable no-console */

const [action, values] = [process.argv[2], process.argv
  .slice(3)
  .reduce((vals, val) => Number.isFinite(+val) ? [...vals, +val] : vals, [])];

switch (action) {
  case 'add':
    if (values.length) {
      console.log(values.reduce((resultOfAdd, val) => resultOfAdd + val));
    } else {
      console.log(`There is nothing to add`);
    }
    break;
  case 'multiply':
    if (values.length) {
      console.log(values.reduce((resultOfMult, val) => resultOfMult * val));
    } else {
      console.log(`There is nothing to multiply`);
    }
    break;
  default:
    console.log(`Operation is not supported!`);
}
