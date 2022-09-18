'use strict';

const minimist = require('minimist');

const { name, lastname, age } = minimist(process.argv.slice(2));

if (!name && !lastname && !age) {
  throw new Error('Not all credentials were set');
}

// eslint-disable-next-line no-console
console.log(`${name} ${lastname} is ${age}`);
