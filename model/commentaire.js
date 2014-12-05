var sequelize = require("./_main");
var Sequelize = require("sequelize");

var Commentaire = sequelize.define('commentaire', {
	id: Sequelize.UUID,
	//id_user
	//id_image
	date: Sequelize.DATE,
	content: Sequelize.STRING,
	notifie: Sequelize.BOOLEAN,
});

module.exports = Commentaire;