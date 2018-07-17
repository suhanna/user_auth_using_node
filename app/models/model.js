var connection = require('./config'),
	usermetadata = require('./user.js')

User = connection.sequelize.define('usertable',usermetadata.attributes, usermetadata.options)

module.exports.User = User