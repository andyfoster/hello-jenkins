var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
	if('respond with hell world', function(done) {
		request(app).get('/').expect('hello world', done);
	});
});