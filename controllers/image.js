var db = require('../models');
var uuidGenerator = require('node-uuid');

function ImageController(){};

ImageController.prototype = (function() {
	return {
		list: function(request, reply) {
			db.Image.findAll().complete(function(err, users) {
				reply(users);
			});
		},
		get: function(request, reply) {
			db.Image.findAll()
			.where({id: parseInt(request.params.id)})
			.complete(function(err, users) {
				reply(users);
			});
		},
		insert: function(request, reply) {
			db.Image.create({
				titre: request.payload.titre,
				extension: request.payload.extension
			}).complete(function(err, user) {
				reply(user);
			});
		},
		remove: function(request, reply) {
			reply("youyou remove");
		},
		update: function(request, reply) {
			reply("youyou update");
		}
	}
})();

var imageController = new ImageController();
module.exports = imageController;
