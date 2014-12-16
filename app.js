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
		// Gestion d'erreur
        throw err[0];
    }
	else
	{
		// Création d'un serveur
        var server = new hapi.Server(3000);
		
		// Chargement des routes
        server.route(routes);
		
		// Lancement du serveur
        server.start(function () {
            console.log('Server running at :', server.info.uri);
        });
    }
});
