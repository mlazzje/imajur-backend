var db = require('../models');

function userController(){};

userController.prototype = (function() {
	return {
		list: function(request, reply) {
			try
			{
				db.user.findAll()
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
				db.user.findOne(parseInt(request.params.id))
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
				db.user.create({
					pseudo: request.payload.pseudo,
					mail: request.payload.mail,
					password: request.payload.password,
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
				db.user.findOne(parseInt(request.params.id))
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
				db.user.findOne(parseInt(request.payload.id))
				.success(function(err, user) {
					if (request.payload.pseudo) {
						user.pseudo = request.payload.pseudo;
					}
					if (request.payload.mail) {
						user.mail = request.payload.mail;
					}
					if (request.payload.password) {
						user.password = request.payload.password;
					}
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

var userController = new userController();
module.exports = userController;
