'use strict';

function multiply(params) {
  let mult = 1;
  let isNothingToMultiply = true;

  for (const param of params) {
    if (!Number(param) && Number(param) !== 0) {
      continue;
    }

    if (isNothingToMultiply) {
      isNothingToMultiply = false;
    }

    mult *= param;
  }

  if (isNothingToMultiply) {
    return 'There is nothing to multiply';
  } else {
    return mult;
  }
}

module.exports = { multiply };
