var db = require('../models');

function ImageController(){};

ImageController.prototype = (function() {
	return {
		list: function(request, reply) {
			try
			{
				db.Image.findAll()
				.success(function(err, users) {
					reply(users);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		get: function(request, reply) {
			try
			{
				db.Image.findOne(parseInt(request.params.id))
				.success(function(err, user) {
					reply(user);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		insert: function(request, reply) {
			try
			{
				db.Image.create({
					titre: request.payload.titre,
					extension: request.payload.extension
				})
				.success(function(err, user) {
					reply(user);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		remove: function(request, reply) {
			try
			{
				db.Image.findOne(parseInt(request.params.id))
				.success(function(err, user) {
					if (user) {
						user.destroy();
						reply("OK").code(200);
					}
					reply("ERROR").code(418);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		update: function(request, reply) {
			try
			{
				db.Image.findOne(parseInt(request.payload.id))
				.success(function(err, user) {
					user.titre = request.payload.titre;
					user.extension = request.payload.extension;
					user.save();
					reply(user);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		}
	}
})();

var imageController = new ImageController();
module.exports = imageController;
