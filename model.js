
var User = sequelize.define('users', {
	id: Sequelize.UUID,
	username: {
		type: Sequelize.STRING,
		unique: true
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	role: {
		type: Sequelize.ENUM,
		values: ['user', 'moderator', 'admin']
	},
	password: Sequelize.STRING,
});
