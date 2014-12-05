var Hapi = require('hapi');

var user = require('./controller/user');
/*
var user = require('./controller/user');
var user = require('./controller/user');
var user = require('./controller/user');
var user = require('./controller/user');
*/

var server = new Hapi.Server(3000);

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		
		user.list(reply);
		
	}
});

server.start(function () {
	console.log('Server running at :', server.info.uri);
});
