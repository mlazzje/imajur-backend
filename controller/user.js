
var User = require('../model/user');

var list = function(callback) {
	
	User.findAll().complete(function(err, users) {
		callback(users);
	});
}

module.exports = {
	list: list,
}
