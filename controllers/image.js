/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'image'
*/

// Chargement des modèles et des modules
var db = require('../models');
var fs = require('fs');
var path = require('path');

function ImageController(){};

ImageController.prototype = (function() {
	return {
		list: function(request, reply) {
			try
			{
				// Récupération de toutes les images
				db.Image.findAll()
				.then(function(images) {
					return reply(images);
				})
				.catch(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				return reply(exception).code(418);
			}
		},
		get: function(request, reply) {
			try
			{
				db.Image.findOne(parseInt(request.params.id))
				.success(function(err, image) {
					return reply(image);
				})
				.catch(function(err) {
					return reply(err).code(418);
				});
			}
			catch(exception)
			{
				return reply(exception).code(418);
			}
		},
		insert: function(request, reply) {
            db.Image.create({
                titre: request.payload.titre,
                extension: request.payload.extension
            })
            .then(function(image) {
                request.payload["image"].pipe(fs.createWriteStream(path.join("uploads", "i", image.id + "." + image.extension)));
                return reply(image).code(201);
            })
            .catch(function(err) {
                return reply(err);
            });
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
				.catch(function(err) {
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
				.catch(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		file: function(request, reply) {
            db.Image.findOne(parseInt(request.params.id))
            .then(function(image) {
                if (!image) {
                    reply("ERROR").code(418);
                }

                return reply.file(path.join("uploads", "i", image.id + "." + image.extension));
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		}
	}
})();

var imageController = new ImageController();
module.exports = imageController;
