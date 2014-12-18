/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier de routes (contrôleur 'commentaire')
*/

// Chargement du contrôleur
var commentaireController = require('../controllers/commentaire');
module.exports = [{
	method: 'GET',
	path: '/commentaire/list',
	config: {handler: commentaireController.list}
},{
	method: 'GET',
	path: '/commentaire/get/{id}',
	config: {handler: commentaireController.get}
},{
	method: 'GET',
	path: '/commentaire/byimage/{id}',
	config: {handler: commentaireController.byImage}
},{
	method: 'POST',
	path: '/commentaire/insert',
	config: {
        handler: commentaireController.insert,
        auth: 'session'
    }
},{
	method: 'GET',
	path: '/commentaire/remove/{id}',
	config: {handler: commentaireController.remove}
},{
	method: 'POST',
	path: '/commentaire/update',
	config: {handler: commentaireController.update}
}];
