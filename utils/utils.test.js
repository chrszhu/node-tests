const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(5, 3, (sum) => {
    expect(sum).toBe(8).toBeA('number');
    done();
  })
})

it('should square a number', () => {
  var res = utils.square(5);
  expect(res).toBe(25).toBeA('number');
});

it('should async square', (done) => {
  utils.asyncSquare(3, (square) => {
    expect(square).toBe(9).toBeA('number');
    done();
  })
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
