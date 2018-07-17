var Sequelize = require('sequelize'),
	sequelize = new Sequelize('postgres://user:pass@host/db');

module.exports.sequelize = sequelize