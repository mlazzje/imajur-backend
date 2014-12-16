/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'commentaire'
*/

// Chargement des modèles
var db = require('../models');

function commentaireController(){};

commentaireController.prototype = (function() {
	return {
		list: function(request, reply) {
            db.commentaire.findAll()
            .then(function(commentaires) {
                reply(commentaires);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		get: function(request, reply) {
            db.commentaire.findOne(parseInt(request.params.id))
            .then(function(commentaire) {
                reply(commentaire);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		insert: function(request, reply) {
            db.commentaire.create({
                content: request.payload.content,
                notifie: request.payload.notifie,
            })
            .then(function(commentaire) {
                reply(commentaire);
            })
            .catch(function(err) {
                // Gestion d'erreur
                reply(err).code(418);
            });
		},
		remove: function(request, reply) {
            db.commentaire.findOne(parseInt(request.params.id))
            .then(function(commentaire) {
                if (commentaire) {
                    commentaire.destroy();
                    reply("OK").code(200);
                }
                reply("ERROR").code(418);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		update: function(request, reply) {
            db.commentaire.findOne(parseInt(request.payload.id))
            .then(function(commentaire) {
                if (request.payload.content) {
                    commentaire.content = request.payload.content;
                }
                if (request.payload.notifie) {
                    commentaire.notifie = request.payload.notifie;
                }
                commentaire.save();
                reply(commentaire);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		}
	}
})();

var commentaireController = new commentaireController();
module.exports = commentaireController;
