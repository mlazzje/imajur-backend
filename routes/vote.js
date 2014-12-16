var voteController = require('../controllers/vote');

module.exports = [{
	method: 'GET',
	path: '/vote/list',
	config: {handler: voteController.list}
},{
	method: 'GET',
	path: '/vote/get/{id}',
	config: {handler: voteController.get}
},{
	method: 'POST',
	path: '/vote/insert',
	config: {handler: voteController.insert}
},{
	method: 'GET',
	path: '/vote/remove/{id}',
	config: {handler: voteController.remove}
},{
	method: 'POST',
	path: '/vote/update',
	config: {handler: voteController.update}
}];