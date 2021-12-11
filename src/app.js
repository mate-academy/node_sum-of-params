'use strict';

const operations = {add: 'add', multiply: 'multiply'};
const operation = process.argv[2];
const args = process.argv.slice(3);

if (operation === operations.add) {
	if (args.length > 1) {
		let sum = args.reduce((prevVal, currVal) => {
			return +prevVal + +currVal;
		}, 0);
		console.log(sum);
	} else {
		console.log('There is nothing to add');
	}
} else if (operation === operations.multiply) {
	if (args.length > 1) {
		let mult = args.reduce((prevVal, currVal) => {
			return +prevVal * +currVal;
		}, 1);
		console.log(mult);
	} else {
		console.log('There is nothing to multiply');
	}
} else {
	console.log('Operation is not supported!');
}
