var commentaireController = require('../controllers/commentaire');

module.exports = [{
	method: 'GET',
	path: '/commentaire/list',
	config: {handler: commentaireController.list}
},{
	method: 'GET',
	path: '/commentaire/get/{id}',
	config: {handler: commentaireController.get}
},{
	method: 'POST',
	path: '/commentaire/insert',
	config: {handler: commentaireController.insert}
},{
	method: 'GET',
	path: '/commentaire/remove/{id}',
	config: {handler: commentaireController.remove}
},{
	method: 'POST',
	path: '/commentaire/update',
	config: {handler: commentaireController.update}
}];