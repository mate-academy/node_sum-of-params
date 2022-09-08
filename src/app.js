'use strict';

function SumOfParams(p) {
  const nums = p.slice(1);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].match(/[1-9]/)) {
      res.push(nums[i]);
    }
  }

  if (res.length === 0) {
    return 'There is nothing to add ';
  }

  if (p[0] === 'add') {
    return res.reduce((a, b) => parseInt(a) + parseInt(b));
  } else if (p[0] === 'multiply') {
    return res.reduce((a, b) => parseInt(a) * parseInt(b));
  } else if (p[0] !== 'multiply' && p[0] !== 'add') {
    return 'Operation is not supported!';
  }
}
// THis call is just for ESlint.
SumOfParams();

// - To run the function you should uncomment
// |-- this 2 strings below, but its impossible to commit
// |-- with it because of eslint rules ))

//       \/ =UNCOMMENT TO RUN= \/
// const par = process.argv.slice(2);
// console.log(SumOfParams(par));
