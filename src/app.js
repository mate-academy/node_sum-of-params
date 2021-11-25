'use strict';

const dotenv = require('dotenv');

dotenv.config();

const [action, ...args] = process.argv.slice(2);
const filteredArgs = args.map(el => Number(el)).filter(el => !isNaN(el));

const phrase = 'There is nothing to ';

switch (action) {
  case 'add':
    console.log((filteredArgs.length > 0) ? (
      filteredArgs.reduce((sum, a) => sum + a)
    ) : (
      phrase + action
    ));
    break;
  case 'multiply':
    console.log((filteredArgs.length > 0) ? (
      filteredArgs.reduce((sum, a) => sum * a)
    ) : (
      phrase + action
    ));
    break;
  default:
    console.log(`Operation is not supported!`);
}
