module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image', {
		id: DataTypes.UUID,
		//id_user
		titre: DataTypes.STRING,
		extension: {
			type: DataTypes.STRING,
			values: ['jpg', 'png', 'gif'],
		},
	});
}
