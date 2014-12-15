var db = require('../models');

function UserController(){};

UserController.prototype = (function() {
	return {
		list: function(request, reply) {
			db.User.findAll().complete(function(err, users) {
				reply(users);
			});
		}
	}
})();

var userController = new UserController();
module.exports = userController;
