/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'vote'
*/

// Chargement des modèles
var db = require('../models');
var async = require('async');

function voteController(){};

voteController.prototype = (function() {
	return {
		list: function(request, reply) {
            db.Vote.findAll()
            .then(function(votes) {
                return reply(votes);
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		},
		get: function(request, reply) {
            db.Vote.findOne({where: {id: parseInt(request.params.id)}})
            .then(function(vote) {
                reply(vote);
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
                upvotes: ['image', function(callback, results) {
                    results.image.getVotes({where: {point: 1}})
                    .done(callback);
                }],
                downvotes: ['image', function(callback, results) {
                    results.image.getVotes({where: {point: -1}})
                    .done(callback);
                }]},
                function(err, results) {
                    if(err) {
                        return reply().code(500);
                    }
                    return reply({
                        upvotes: results.upvotes,
                        downvotes: results.downvotes
                    });
                }
            );
        },
		insert: function(request, reply) {
            if(request.payload.point != -1 && request.payload.point != 1) {
                return reply("Invalid vote value").code(403);
            }
            async.auto({
                create: function(callback) {
                    db.Vote.create({
                        point: request.payload.point
                    }).done(callback);
                },
                find: function(callback) {
                    db.Image.findOne(parseInt(request.payload.image)).done(callback);
                },
                update: ['create', 'find', function(callback, results) {
                    results.find.addVote(results.create).done(callback);
                }],
            }, function(err, results) {
                if(err) {
                    return reply(err).code(418);
                }
                return reply(results.create);
            });
		},
		remove: function(request, reply) {
            db.Vote.findOne(parseInt(request.params.id))
            .then(function(vote) {
                if (vote)
                {
                    vote.destroy();
                    return reply("OK").code(200);
                }
                return reply("ERROR").code(418);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		},
		update: function(request, reply) {
            db.Vote.findOne(parseInt(request.payload.id))
            .then(function(err, vote) {
                vote.point = parseInt(request.payload.point);
                vote.save();
                reply(vote);
            })
            .catch(function(err) {
                reply(err).code(418);
            });
		}
	}
})();

var voteController = new voteController();
module.exports = voteController;
