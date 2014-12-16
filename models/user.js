module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			type: DataTypes.UUID,
			defaultValue: sequelize.UUIDV1
		},
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
