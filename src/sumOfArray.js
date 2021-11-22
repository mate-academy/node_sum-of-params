'use strict';

const sumOfArray = (array) => {
  if (!Array.isArray(array) || !array.length) {
    return 'There is nothing to add';
  }

  return array.reduce((prevItem, currentItem) => prevItem + currentItem, 0);
};

module.exports = {
  sumOfArray,
};
