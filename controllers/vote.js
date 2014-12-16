/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'vote'
*/

// Chargement des modèles
var db = require('../models');

function voteController(){};

voteController.prototype = (function() {
	return {
		list: function(request, reply) {
            db.vote.findAll()
            .then(function(votes) {
                reply(votes);
            })
            .except(function(err) {
                reply(err).code(418);
            });
		},
		get: function(request, reply) {
            db.vote.findOne(parseInt(request.params.id))
            .then(function(vote) {
                reply(vote);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		insert: function(request, reply) {
            db.vote.create({
                point: request.payload.point,
            })
            .then(function(vote) {
                reply(vote);
            })
            .error(function(err) {
                // Gestion d'erreur
                reply(err).code(418);
            });
		},
		remove: function(request, reply) {
            db.vote.findOne(parseInt(request.params.id))
            .then(function(vote) {
                if (vote)
                {
                    vote.destroy();
                    reply("OK").code(200);
                }
                reply("ERROR").code(418);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		update: function(request, reply) {
            db.vote.findOne(parseInt(request.payload.id))
            .then(function(err, vote) {
                vote.point = request.payload.point;
                vote.save();
                reply(vote);
            })
            .catch(function(err) {
                // Gestion d'erreur
                reply(err).code(418);
            });
		}
	}
})();

var voteController = new voteController();
module.exports = voteController;
