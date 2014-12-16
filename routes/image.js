var imageController = require('../controllers/image');

module.exports = [{
	method: 'GET',
	path: '/image',
	config: {handler: imageController.list}
},{
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
	path: '/image/remove',
	config: {handler: imageController.remove}
},{
	method: 'GET',
	path: '/image/update',
	config: {handler: imageController.update}
}];