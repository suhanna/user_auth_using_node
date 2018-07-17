var Sequelize = require('sequelize')

var attributes = {
	username : {
		type : Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password : {
		type : Sequelize.STRING
	}
}

var options = {
	freezeTableName: true,
}

module.exports={
	attributes : attributes,
	options : options
}