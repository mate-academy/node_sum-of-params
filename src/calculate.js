'use strict';

function calculate(array, func) {
  return array.reduce((accum, current) => {
    const num = Number(current);

    if (isNaN(num)) {
      return accum;
    }

    return func(accum, num);
  }, 0);
}

module.exports = {
  calculate,
};
