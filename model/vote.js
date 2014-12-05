var sequelize = require("./_main");
var Sequelize = require("sequelize");

var Vote = sequelize.define('vote', {
	id: Sequelize.UUID,
	//id_user
	//id_image
	point: {
		type: Sequelize.INTEGER,
		values: [1, -1],
	},
});

module.exports = Vote;