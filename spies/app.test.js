const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('app', () => {
  var db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Chris', 25);
    expect(spy).toHaveBeenCalledWith('Chris', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'doodoo@example.com';
    var password = 'hunter2';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
})
