/*
	PROJET : Imjur (Server)
	GROUPE : DEGAINE Mathieu, GILLET Eric, LE DUFF Boris, LESBROS Maxime, ROSENSTIEHL Quentin
	
	Fichier de routes (contrôleur 'user')
*/

// Chargement du contrôleur
var userController = require('../controllers/user');
module.exports = [{
	method: 'GET',
	path: '/user/list',
	config: {
        handler: userController.list,
        auth: 'session' 
    }
},{
	method: 'GET',
	path: '/user/get/{id}',
	config: {handler: userController.get}
},{
	method: 'POST',
	path: '/user/login',
	config: {
        handler: userController.validate,
        auth: {
            mode: 'try',
            strategy: 'session'
        },
        plugins: {
            'hapi-auth-cookie': {
                redirectTo: false
            }
        }
    }
},{
	method: 'GET',
	path: '/user/logout',
	config: {handler: userController.logout}
},{
	method: 'POST',
	path: '/user/insert',
	config: {handler: userController.insert}
},{
	method: 'GET',
	path: '/user/remove/{id}',
	config: {handler: userController.remove}
},{
	method: 'POST',
	path: '/user/update',
	config: {handler: userController.update}
}];
