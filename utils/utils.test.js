const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(5);
  expect(res).toBe(25).toBeA('number');
});

it('should verify that first and last name are set', () => {
  var user = {
    age: 21,
    location: "US"
  };
  var res = utils.setName(user, "chris zhu");
  expect(res).toInclude({
    firstName: 'chris',
    lastName: 'zhu'
  });
});
