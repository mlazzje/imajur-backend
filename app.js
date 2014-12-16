var hapi = require('hapi')
, db     = require('./models')
, routes = require('./routes');


db.sequelize.sync().complete(function(err) {
    if (err) {
        throw err[0]
    } else {
        var server = new hapi.Server();
        server.connection({port: 3000});
        server.route(routes);
        server.start(function () {
            console.log("Listening on 3000");
        });
    }
});
