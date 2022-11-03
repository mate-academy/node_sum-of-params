'use strict';

function multiply(inpArr) {
  let result = inpArr[0];

  for (let i = 1; i < inpArr.length; i++) {
    result *= inpArr[i];
  }

  return result;
};

module.exports = { multiply };
