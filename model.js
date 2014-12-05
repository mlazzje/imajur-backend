
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
	password: {
		type: Sequelize.STRING,
	},
});

var Image = sequelize.define('image', {
	id: Sequelize.UUID,
	//id_user
	titre: {
		type: Sequelize.STRING,
	},
	extension: {
		type: Sequelize.STRING,
		values: ['jpg', 'png', 'gif'],
	},
	date: {
		type: Sequelize.DATE,
	},
});

var Commentaire = sequelize.define('commentaire', {
	id: Sequelize.UUID,
	//id_user
	//id_image
	date: {
		type: Sequelize.DATE,
	},
	content: {
		type: Sequelize.STRING,
	},
	notifie: {
		type: Sequelize.BOOLEAN,
	},
});

var Vote = sequelize.define('vote', {
	id: Sequelize.UUID,
	//id_user
	//id_image
	point: {
		type: Sequelize.INTEGER,
		values: [1, -1],
	},
});

User.hasMany(Image, {as: 'Images'});
User.hasMany(Commentaire, {as: 'Commentaires'});
User.hasMany(Vote, {as: 'Votes'});

Image.hasMany(Commentaire, {as: 'Commentaires'});
Image.hasMany(Vote, {as: 'Votes'});

