module.exports = function (sequelize, DataTypes) {
	return sequelize.define('vote', {
		id: {
			type: DataTypes.UUID,
			defaultValue: sequelize.UUIDV1
		},
		//id_user
		//id_image
		point: {
			type: DataTypes.INTEGER,
			values: [1, -1],
		},
	});
}
