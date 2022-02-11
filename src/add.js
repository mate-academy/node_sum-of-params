'use strict';

function add(params) {
  let sum = 0;
  let isNothingToAdd = true;

  for (const param of params) {
    if (!Number(param) && Number(param) !== 0) {
      continue;
    }

    if (isNothingToAdd) {
      isNothingToAdd = false;
    }

    sum += Number(param);
  }

  if (isNothingToAdd) {
    return 'There is nothing to add';
  }

  return sum;
}

module.exports = { add };
