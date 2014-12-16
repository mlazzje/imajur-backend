/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'commentaire'
*/

// Chargement des modèles
var db = require('../models');

function commentaireController(){};

commentaireController.prototype = (function() {
	return
	{
		list: function(request, reply) {
			try
			{
				// Récupération de tous les commentaires
				db.commentaire.findAll()
				.success(function(err, commentaires) {
					reply(commentaires);
				})
				.error(function(err) {
					// Gestion d'erreur
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
					// Gestion d'erreur
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
					content: request.payload.content,
					notifie: request.payload.notifie,
				})
				.success(function(err, commentaire) {
					reply(commentaire);
				})
				.error(function(err) {
					// Gestion d'erreur
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
					if (commentaire)
					{
						// Si l'on a trouvé l'objet, on le supprime
						commentaire.destroy();
						reply("OK").code(200);
					}
					reply("ERROR").code(418);
				})
				.error(function(err) {
					// Gestion d'erreur
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
					// Pour chaque paramètre, s'il a été spécifié, on le met à jour
					// Sinon, on le laisse tel quel
					if (request.payload.content) {
						commentaire.content = request.payload.content;
					}
					if (request.payload.notifie) {
						commentaire.notifie = request.payload.notifie;
					}
					commentaire.save();
					reply(commentaire);
				})
				.error(function(err) {
					// Gestion d'erreur
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
