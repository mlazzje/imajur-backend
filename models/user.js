/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Modèle 'user'
*/

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		pseudo: {						// Pseudo de l'utilisateur
			type: DataTypes.STRING,
			unique: true
		},
		mail: {							// Adresse mail de l'utilisateur
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING,		// Mot de passe de l'utilisateur
	});
}
