/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier de routes (contrôleur 'image')
*/

// Chargement du contrôleur
var imageController = require('../controllers/image');

module.exports = [{
	method: 'GET',
	path: '/image/list',
	config: {handler: imageController.list}
},{
	method: 'GET',
	path: '/image/get/{id}',
	config: {handler: imageController.get}
},{
	method: 'POST',
	path: '/image/insert',
	config: {
        handler: imageController.insert,
        payload:{
            maxBytes: 209715200,
            output:'stream',
            parse: true
      },
    }
},{
	method: 'GET',
	path: '/image/remove/{id}',
	config: {handler: imageController.remove}
},{
	method: 'POST',
	path: '/image/update',
	config: {handler: imageController.update}
},{
	method: 'GET',
	path: '/i/{id}',
	config: {handler: imageController.file}
}];
