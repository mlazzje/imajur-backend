/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier de routes (chargement des fichiers de routes spécifiques)
*/

// Chargement des modules utilisés
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
    for (var i = 0; i < mod.length; i++) {
        mod[i].config.cors = true;
    }
    module.exports = module.exports.concat(mod)
	//Array.prototype.push.apply(module.exports, mod);
	//_.extend(module.exports, mod);
});
