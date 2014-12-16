module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commentaire', {
		id: {
			type: DataTypes.UUID,
			defaultValue: sequelize.UUIDV1
		},
		//id_user
		//id_image
		date: DataTypes.DATE,
		content: DataTypes.STRING,
		notifie: DataTypes.BOOLEAN,
	});
}
