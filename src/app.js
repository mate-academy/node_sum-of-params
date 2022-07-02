/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');
const { mathOperation } = require('./mathOperation');

const data = process.argv.slice(2);
const operationType = minimist(data)._[0];
const restData = minimist(data)._.slice(1);

mathOperation(operationType, restData);
