//var Types = require('hapi').types;

var userController = require('../controllers/user');

module.exports = [{
	method: 'GET',
	path: '/',
	config: {handler: userController.list}
}]