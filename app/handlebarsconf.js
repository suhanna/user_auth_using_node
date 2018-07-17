var exphbs = require('express-handlebars')

module.exports = function(app){
	app.engine('.hbs',exphbs({
		extname: '.hbs',
		defaultLayout: 'main',
	}))
	app.set('view engine', '.hbs')
}
