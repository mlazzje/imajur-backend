/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Modèle 'image'
*/

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image', {
		//id_user
		titre: DataTypes.STRING,			// Titre de l'image
		extension: {						// Extension du fichier
			type: DataTypes.STRING,
			values: ['jpg', 'png', 'gif'],
		},
	});
}
