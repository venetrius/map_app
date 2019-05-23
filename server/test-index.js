var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/index');
var should = chai.should();

chai.use(chaiHttp);
const expect = chai.expect;

const testCases = {
  test_server : describe('Get hello world', function() {
      it('should list ALL blobs on /blobs GET', function(done) {
          chai.request(server)
            .get('/')
            .end(function(err, res){
              res.should.have.status(200);
              done();
            });
        });
        it('should get error 404 for unexisting route', function(done) {
          chai.request(server)
            .get('/randomstring')
            .end(function(err, res){
              res.should.have.status(404);
              done();
            });
        });
  }), 
// Session route 
  test_GET_sessionNEW : describe('GET "/session/new" - loginpage', function() {
    it('should return 200 OK', function(done) {
      chai.request(server)
        .get('/sessions/new')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });
  }),

  test_POST_session : describe('POST username to "session"', function() {
    it('should return 403 if username is null', function(done) {
      chai.request(server)
        .post('/sessions')
        .end(function(err, res){
          res.should.have.status(403);
          done();
        });
    });
    it('should return 200 ok if username is not null', function(done) {
      chai.request(server)
        .post('/sessions')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({user_name: 'test'})
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });
  })


}
module.exports = testCases;