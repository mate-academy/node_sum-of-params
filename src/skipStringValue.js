'use strict';

const skipStringInArray = array => array
  .filter(el => !isNaN(+el)).map(el => +el);

module.exports = {
  skipStringInArray,
};
