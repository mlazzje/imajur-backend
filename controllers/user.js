/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Contrôleur 'user'
*/

// Chargement des modèles
var db = require('../models');
var bcrypt = require('bcrypt')

function userController(){};

userController.prototype = (function() {
	return {
		list: function(request, reply) {
            db.User.findAll()
            .then(function(users) {
                return reply(users);
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		},
		get: function(request, reply) {
            db.User.findOne(parseInt(request.params.id))
            .then(function(user) {
                return reply(user);
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		},
		validate: function(request, reply) {
            db.User.findOne({'where' : {'pseudo': request.payload.pseudo}})
            .then(function(user) {
                if (!user) {
                    return reply(null, false);
                }
                bcrypt.compare(request.payload.password, user.password, function(err, isValid) {
                    if(isValid) {
                        return reply(user);
                    }
                    return reply(err).code(401);
                });
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		},
		insert: function(request, reply) {
            db.User.create({
                pseudo: request.payload.pseudo,
                mail: request.payload.mail,
                password: bcrypt.hashSync(request.payload.password, 8),
            })
            .then(function(user) {
                return reply(user);
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		},
		remove: function(request, reply) {
            db.User.findOne(parseInt(request.params.id))
            .then(function(user) {
                if (user)
                {
                    // Si l'on a trouvé l'objet, on le supprime
                    user.destroy();
                    return reply("OK").code(200);
                }
                return reply("ERROR").code(418);
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		},
		update: function(request, reply) {
            db.User.findOne(parseInt(request.payload.id))
            .then(function(user) {
                // Pour chaque paramètre, s'il a été spécifié, on le met à jour
                // Sinon, on le laisse tel quel
                if (request.payload.pseudo) {
                    user.pseudo = request.payload.pseudo;
                }
                if (request.payload.mail) {
                    user.mail = request.payload.mail;
                }
                if (request.payload.password) {
                    user.password = bcrypt.hashSync(request.payload.password);
                }
                user.save();
                return reply(user);
            })
            .catch(function(err) {
                return reply(err).code(418);
            });
		}
	}
})();

var userController = new userController();
module.exports = userController;
