var path = require('path');
var fs = require('fs');
var _ = require('underscore');

module.exports = [];

fs.readdirSync(__dirname)
    .filter(function(f) { return f.substr(-3) === '.js' && f !== 'index.js'; })
    .forEach(function (file) {

        /* Prepare empty object to store module */

        /* Store module with its name (from filename) */
        //mod[path.basename(file, '.js')] = require(path.join(__dirname, file));
        var mod = require(path.join(__dirname, file));

        /* Extend module.exports (in this case - undescore.js, can be any other) */
        Array.prototype.push.apply(module.exports, mod);
        _.extend(module.exports, mod);
    });
