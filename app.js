var hapi = require('hapi')
, db     = require('./models')
, routes = require('./routes');


db.sequelize.sync().complete(function(err) {
    if (err) {
        throw err[0]
    } else {
        var server = new hapi.Server(3000);
        server.route(routes);
        server.start(function () {
            console.log('Server running at :', server.info.uri);
        });
    }
});
