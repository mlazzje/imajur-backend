var db = require('../models');

function commentaireController(){};

commentaireController.prototype = (function() {
	return {
		list: function(request, reply) {
			try
			{
				db.commentaire.findAll()
				.success(function(err, commentaires) {
					reply(commentaires);
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
				db.commentaire.findOne(parseInt(request.params.id))
				.success(function(err, commentaire) {
					reply(commentaire);
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
				db.commentaire.create({
					// TODO
					//XXXXXXXX: request.payload.XXXXXXXX,
				})
				.success(function(err, commentaire) {
					reply(commentaire);
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
				db.commentaire.findOne(parseInt(request.params.id))
				.success(function(err, commentaire) {
					if (commentaire) {
						commentaire.destroy();
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
				db.commentaire.findOne(parseInt(request.payload.id))
				.success(function(err, commentaire) {
					// TODO
					//commentaire.XXXXXXXX: request.payload.XXXXXXXX,
					commentaire.save();
					reply(commentaire);
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

var commentaireController = new commentaireController();
module.exports = commentaireController;
