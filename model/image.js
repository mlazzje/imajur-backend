var sequelize = require("./_main");
var Sequelize = require("sequelize");
var Commentaire = require("./commentaire");
var Vote = require("./vote");

var Image = sequelize.define('image', {
	id: Sequelize.UUID,
	//id_user
	titre: Sequelize.STRING,
	extension: {
		type: Sequelize.STRING,
		values: ['jpg', 'png', 'gif'],
	},
	date: Sequelize.DATE,
});

Image.hasMany(Commentaire, {as: 'Commentaires'});
Image.hasMany(Vote, {as: 'Votes'});

module.exports = Image;