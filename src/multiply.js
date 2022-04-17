'use strict';

const multiply = (array) => {
  if (!Array.isArray(array) || !array.length) {
    return 'There is nothing to add';
  }

  return array.reduce((prevItem, currentItem) => prevItem * currentItem, 1);
};

module.exports = {
  multiply,
};
