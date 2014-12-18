/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'commentaire'
*/

// Chargement des modèles
var db = require('../models');
var async = require('async');

function commentaireController(){};

commentaireController.prototype = (function() {
	return {
		list: function(request, reply) {
            db.Commentaire.findAll()
            .then(function(commentaires) {
                reply(commentaires);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		get: function(request, reply) {
            db.Commentaire.findOne(parseInt(request.params.id))
            .then(function(commentaire) {
                reply(commentaire);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		insert: function(request, reply) {
            async.auto({
            create: function(callback) {
                db.Commentaire.create({
                    content: request.payload.content,
                    notifie: request.payload.notifie,
                }).done(callback)
            },
            findImage: function(callback) {
                db.Image.find(request.payload.image).done(callback)
            },
            setComment: ['findImage','create', function(callback, results){
                results.findImage.addCommentaire(results.create).done(callback);
            }]
            }, function(err, results) {
                if(err) {
                    return reply(err).code(418);
                }
                return reply(results.create)
            });
		},
		remove: function(request, reply) {
            db.Commentaire.findOne(parseInt(request.params.id))
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
            db.Commentaire.findOne(parseInt(request.payload.id))
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
		},
        byImage: function(request, reply){
            async.auto({
                image: function(callback) {
                    db.Image.find(request.params.id)
                    .done(callback)
                },
                commentaires: ['image', function(callback, results) {
                    results.image.getCommentaires({include: [db.User]})
                    .done(callback);
                }]},
                function(err, results) {
                    if(err) {
                        return reply(err).code(500);
                    }
                    return reply(results.commentaires);
                }
            );
        }
	}
})();

var commentaireController = new commentaireController();
module.exports = commentaireController;
