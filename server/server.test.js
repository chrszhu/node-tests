const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {

  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'loludied'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should check if i exist lol', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'eddie',
            age: 2
          });
        })
        .end(done);
    });

  });
});
