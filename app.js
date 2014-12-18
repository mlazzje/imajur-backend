/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier principal (lancement de l'application)
*/

// Chargement du framework, des modèles et des routes
var hapi = require('hapi')
, db     = require('./models')
, config = require('./local_settings');

// Synchronisation de la base de données
db.sequelize.sync().complete(function(err){
    if (err) {
        throw err[0]
    } else {
        var server = new hapi.Server();
        server.connection({port: config.port});
        server.register(require('hapi-auth-cookie'), function (err) {
            console.log(err);
            server.auth.strategy('session', 'cookie', {
                password: config.secret,
                cookie: 'sid',
                isSecure: false
            });
        });
        server.state('user', {
            ttl: null,
            isSecure: false,
            encoding: 'base64json'
        });
        server.route(require('./routes'));
        server.start(function () {
            console.log("Listening on 3000");
        });
    }
});
