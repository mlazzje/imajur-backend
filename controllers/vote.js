var db = require('../models');

function voteController(){};

voteController.prototype = (function() {
	return {
		list: function(request, reply) {
			try
			{
				db.vote.findAll()
				.success(function(err, votes) {
					reply(votes);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		get: function(request, reply) {
			try
			{
				db.vote.findOne(parseInt(request.params.id))
				.success(function(err, vote) {
					reply(vote);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		insert: function(request, reply) {
			try
			{
				db.vote.create({
					// TODO
					//XXXXXXXX: request.payload.XXXXXXXX,
				})
				.success(function(err, vote) {
					reply(vote);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		remove: function(request, reply) {
			try
			{
				db.vote.findOne(parseInt(request.params.id))
				.success(function(err, vote) {
					if (vote) {
						vote.destroy();
						reply("OK").code(200);
					}
					reply("ERROR").code(418);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		},
		update: function(request, reply) {
			try
			{
				db.vote.findOne(parseInt(request.payload.id))
				.success(function(err, vote) {
					// TODO
					//vote.XXXXXXXX: request.payload.XXXXXXXX,
					vote.save();
					reply(vote);
				})
				.error(function(err) {
					reply(err).code(418);
				});
			}
			catch(exception)
			{
				reply(exception).code(418);
			}
		}
	}
})();

var voteController = new voteController();
module.exports = voteController;
