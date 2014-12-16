/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier des modèles (chargement des modèles spécifiques)
*/

// Si l'on a déjà chargé les modèles, on ne fait rien
if (global.hasOwnProperty('db')) {
	module.exports = global.db;
}

// Chargement des paramètes locaux et du module Sequelize
var settings = require('../local_settings'),
    Sequelize = require('sequelize'),
    sequelize = null;

// Connexion à la base de données
sequelize = new Sequelize (
	settings.db_name,
	settings.login,
	settings.password,
	{dialect: 'postgres'}
);

// Import des différentes tables
global.db = {
	Sequelize:		Sequelize,
	sequelize:		sequelize,
	User:			sequelize.import(__dirname + '/user'),
	Commentaire:	sequelize.import(__dirname + '/commentaire'),
	Image:			sequelize.import(__dirname + '/image'),
	Vote:			sequelize.import(__dirname + '/vote'),
};

// Définition des relations
global.db.User.hasMany(global.db.Image, {as: 'Images'});
global.db.User.hasMany(global.db.Commentaire, {as: 'Commentaires'});
global.db.User.hasMany(global.db.Vote, {as: 'Votes'});
global.db.Image.hasMany(global.db.Commentaire, {as: 'Commentaires'});
global.db.Image.hasMany(global.db.Vote, {as: 'Votes'});

module.exports = global.db;
