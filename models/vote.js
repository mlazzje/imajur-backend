module.exports = function (sequelize, DataTypes) {
	return sequelize.define('vote', {
		//id_user
		//id_image
		point: {
			type: DataTypes.INTEGER,
			values: [1, -1],
		},
	});
}
