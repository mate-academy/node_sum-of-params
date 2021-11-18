# Sum of params
- Read params from a command line and printing the result of addition or multiplication
  - `node src/app.mjs add 1 2 3 4 5` should print 15 - the sum of all numbers
  - `node src/app.mjs mutiply 3 4 5` should print 60 - the product of `3 * 4 * 5`
- For any other operation print `Operation is not supported!`
- Skip all not numeric value
- If there are no numeric values print `There is nothing to add` (or multiply)
