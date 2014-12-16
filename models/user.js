module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		pseudo: {
			type: DataTypes.STRING,
			unique: true
		},
		mail: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING,
	});
}
