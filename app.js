/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier principal (lancement de l'application)
*/

// Chargement du framework, des modèles et des routes
var hapi = require('hapi')
, db     = require('./models')
, routes = require('./routes');

// Synchronisation de la base de données
db.sequelize.sync().complete(function(err)
{
    if (err) {
        throw err[0]
    } else {
        var server = new hapi.Server();
        server.connection({port: 3000});
        server.route(routes);
		
		// Lancement du serveur
        server.start(function () {
            console.log("Listening on 3000");
        });
    }
});
