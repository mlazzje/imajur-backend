var sequelize = require("./_main");
var Sequelize = require("sequelize");
var Image = require("./image");
var Commentaire = require("./commentaire");
var Vote = require("./vote");

var User = sequelize.define('user', {
	id: Sequelize.UUID,
	pseudo: {
		type: Sequelize.STRING,
		unique: true
	},
	mail: {
		type: Sequelize.STRING,
		unique: true
	},
	password: Sequelize.STRING,
});

User.hasMany(Image, {as: 'Images'});
User.hasMany(Commentaire, {as: 'Commentaires'});
User.hasMany(Vote, {as: 'Votes'});

module.exports = User;