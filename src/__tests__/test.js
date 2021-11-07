'use strict';

const getData = require('../app');

// can't push this without tests

test('should return the correct sum of numbers', () => expect(
  getData(['add', '1', '2', '7'])
).toBe(10));

test('should return the correct multiplication of numbers', () => expect(
  getData(['multiply', '2', '5', '7'])
).toBe(70));

test('should return the string "There is no operator"', () => expect(
  getData([])
).toBe('There is no operator'));

test('should return the string "Operation is not supported!"', () => expect(
  getData(['_', '1', '2', '7'])
).toBe('Operation is not supported!'));

test('should return the string "There is nothing to add"', () => expect(
  getData(['add', 'bla-bla', 'string'])
).toBe('There is nothing to add'));
