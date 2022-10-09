'use strict';

const add = (nums) => {
  const result = nums.reduce((prev, num) => prev + num, 0)
  console.log(result);
};

const multiply  = (nums) => {
  const result = nums.reduce((prev, num) => prev * num, 1);
  console.log(result);
}

const func = () => {
  const numbers = process.argv.slice(3).map(num => +num).filter(num => isFinite(num));

  if (numbers.length === 0) {
    console.log(`There is nothing to ${process.argv[2]}`);
    return;
  }

  switch(process.argv[2]) {
    case 'add':
      add(numbers);
      break;

    case 'multiply':
      multiply(numbers);
      break;

    default:
      console.log('Operation is not supported!');
  }
};

func();
