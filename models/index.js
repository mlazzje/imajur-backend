var settings = require('../local_settings');

if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize')
        , sequelize = null;

    sequelize = new Sequelize (
            settings.db_name,
            settings.login,
            settings.password,
            {dialect: 'postgres'});

    global.db = {
        Sequelize:      Sequelize,
        sequelize:      sequelize,
        User:           sequelize.import(__dirname + '/user'),
        //Commentaire:    sequelize.import(__dirname + '/commentaire'),
        Image:          sequelize.import(__dirname + '/image'),
        //Vote:           sequelize.import(__dirname + '/vote'),
        // add your other models here
    }
    //global.db.User.hasMany( global.db.Image, {as: 'Images'});
    //global.db.User.hasMany( global.db.Commentaire, {as: 'Commentaires'});
    //global.db.User.hasMany( global.db.Vote, {as: 'Votes'});
    //global.db.Image.hasMany(global.db.Commentaire, {as: 'Commentaires'});
    //global.db.Image.hasMany(global.db.Vote, {as: 'Votes'});

    /*
       Associations can be defined here. E.g. like this:
       global.db.User.hasMany(global.db.SomethingElse)
       */
}
module.exports = global.db
