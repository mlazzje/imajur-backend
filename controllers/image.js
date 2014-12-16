var db = require('../models');

function ImageController(){};

ImageController.prototype = (function() {
	return {
		list: function(request, reply) {
			db.Image.findAll().complete(function(err, users) {
				reply(users);
			});
		},
		get: function(request, reply) {
			db.Image.findOne(parseInt(request.params.id))
			.complete(function(err, user) {
				reply(user);
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
			db.Image.delete({
				id: parseInt(request.params.id)
			})
			.complete(function(err) {
				reply.redirect("/image/");
			});
		},
		update: function(request, reply) {
			db.Image.findOne(parseInt(request.params.id))
			.complete(function(err, user) {
				user.titre = request.payload.titre;
				user.extension = request.payload.extension;
				user.save();
				reply(user);
			});
		}
	}
})();

var imageController = new ImageController();
module.exports = imageController;
