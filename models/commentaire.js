/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Modèle 'commentaire'
*/

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commentaire', {
		//id_user
		//id_image
		content: DataTypes.STRING,		// Contenu du commentaire
		notifie: DataTypes.BOOLEAN,		// Tag de notification au propriétaire de l'image concernée
	});
}
