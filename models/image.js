module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image', {
		titre: DataTypes.STRING,
		extension: {
			type: DataTypes.STRING,
			values: ['jpg', 'png', 'gif'],
		},
	});
}
