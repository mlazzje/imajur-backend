/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'image'
*/

// Chargement des modèles
var db = require('../models');

function ImageController(){};

ImageController.prototype = (function() {
	return
	{
		list: function(request, reply) {
			try
			{
				// Récupération de toutes les images
				db.Image.findAll()
				.success(function(err, images) {
					reply(images);
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
				db.Image.findOne(parseInt(request.params.id))
				.success(function(err, image) {
					reply(image);
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
				db.Image.create({
					titre: request.payload.titre,
					extension: request.payload.extension
				})
				.success(function(err, image) {
					reply(image);
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
				db.Image.findOne(parseInt(request.params.id))
				.success(function(err, image) {
					if (image)
					{
						// Si l'on a trouvé l'objet, on le supprime
						image.destroy();
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
				db.Image.findOne(parseInt(request.payload.id))
				.success(function(err, image) {
					// Pour chaque paramètre, s'il a été spécifié, on le met à jour
					// Sinon, on le laisse tel quel
					if (request.payload.titre) {
						image.titre = request.payload.titre;
					}
					if (request.payload.extension) {
						image.extension = request.payload.extension;
					}
					image.save();
					reply(image);
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

var imageController = new ImageController();
module.exports = imageController;
