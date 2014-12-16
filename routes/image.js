var imageController = require('../controllers/image');

module.exports = [{
	method: 'GET',
	path: '/image/list',
	config: {handler: imageController.list}
},{
	method: 'GET',
	path: '/image/get/{id}',
	config: {handler: imageController.get}
},{
	method: 'POST',
	path: '/image/insert',
	config: {handler: imageController.insert}
},{
	method: 'GET',
	path: '/image/remove/{id}',
	config: {handler: imageController.remove}
},{
	method: 'POST',
	path: '/image/update',
	config: {handler: imageController.update}
}];