'use strict';


sumOfParams();

function sumOfParams() {
  const dataFromTerminal = process.argv.slice(3);
  const action = process.argv[2];
  
  switch (action) {
    case 'add':
      const result = dataFromTerminal.map(num => +num).reduce((a,b) => a + b)

      if (!result) {
        console.log('There is nothing to add');
        break
      }
  
      console.log(result)
      break;

    case 'mutiply':
      const res = dataFromTerminal.map(num => +num).reduce((a,b) => a * b)

      if (!res) {
        console.log('There is nothing to mutiply')
        break;
      } 

      console.log(res)
      break;

    default:
      console.log('Operation is not supported!');
      break;
  }  
}

