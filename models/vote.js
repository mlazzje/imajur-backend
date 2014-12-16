/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Modèle 'vote'
*/

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('vote', {
		//id_user
		//id_image
		point: {						// Point (+1 ou -1)
			type: DataTypes.INTEGER,
			values: [1, -1],
		},
	});
}
