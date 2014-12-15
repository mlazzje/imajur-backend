module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commentaire', {
		id: DataTypes.UUID,
		//id_user
		//id_image
		date: DataTypes.DATE,
		content: DataTypes.STRING,
		notifie: DataTypes.BOOLEAN,
	});
}
