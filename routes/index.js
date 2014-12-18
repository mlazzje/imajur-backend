/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Index des routes (chargement des fichiers de routes spécifiques)
*/

var path = require('path');
var fs = require('fs');
var _ = require('underscore');

module.exports = [];

// Lecture des fichiers du répertoire
fs.readdirSync(__dirname)
.filter(function(f) {
	// Application d'un filtre sur les fichiers js autre que le fichier actuel
	return f.substr(-3) === '.js' && f !== 'index.js';
})
.forEach(function (file) {
	// Pour chaque fichier de routes spécifiques, ajout des routes
	var mod = require(path.join(__dirname, file));

    // Définition de l'entête CORS pour indiquer aux navigateurs
    // qu'il est possible de réaliser des requêtes HTTP sur ce server
    // depuis n'importe quelle origine (page web)
    for (var i = 0; i < mod.length; i++) {
        //mod[i].config.cors = true;
        mod[i].config.cors = {
            origin: ['*'],
            credentials: true,
            matchOrigin: true
        };
    }
    module.exports = module.exports.concat(mod)
});
