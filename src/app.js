'use strict';

const dotenv = require('dotenv');

dotenv.config();

const [action, ...args] = process.argv.slice(2);
const filteredArgs = args.map(el => Number(el)).filter(el => !isNaN(el));

const phrase = 'There is nothing to ';

switch (action) {
  case 'add':
    (filteredArgs.length > 0) ? console.log(filteredArgs.reduce((sum, a) => sum + a)) : console.log(phrase + action);
    break;
  case 'multiply':
    (filteredArgs.length > 0) ? console.log(filteredArgs.reduce((sum, a) => sum * a)) : console.log(phrase + action);
    break;
  default:
    console.log(`Operation is not supported!`);
}
