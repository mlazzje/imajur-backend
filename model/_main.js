var settings = require('../local_settings');
var Sequelize = require("sequelize");

var sequelize = new Sequelize (
	settings.db_name,
	settings.login,
	settings.password,
	{dialect: 'postgres'}
);

module.exports = sequelize;