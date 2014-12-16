var userController = require('../controllers/user');

module.exports = [{
	method: 'GET',
	path: '/user/list',
	config: {handler: userController.list}
},{
	method: 'GET',
	path: '/user/get/{id}',
	config: {handler: userController.get}
},{
	method: 'POST',
	path: '/user/insert',
	config: {handler: userController.insert}
},{
	method: 'GET',
	path: '/user/remove/{id}',
	config: {handler: userController.remove}
},{
	method: 'POST',
	path: '/user/update',
	config: {handler: userController.update}
}];