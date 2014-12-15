var path = require('path');
var fs = require('fs');
var _ = require('underscore');

module.exports = [];

fs.readdirSync(__dirname)
.filter(function(f) {
	return f.substr(-3) === '.js' && f !== 'index.js';
})
.forEach(function (file) {
	var mod = require(path.join(__dirname, file));
	Array.prototype.push.apply(module.exports, mod);
	_.extend(module.exports, mod);
});
