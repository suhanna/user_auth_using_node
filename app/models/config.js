var Sequelize = require('sequelize'),
	// sequelize = new Sequelize('postgres://user:pass@host/db');
	sequelize = new Sequelize('postgres://ccgateway:ccgateway@pass@localhost:5432/nodeauth2');

module.exports.sequelize = sequelize