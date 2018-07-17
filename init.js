var models = require('./app/models/model.js')

models.User.sync().then(()=>{
	models.User.create({
		username : 'testuser',
		password : 'testpassword'
	}).then(()=>{
		console.log("...... Test user Created ......")
	})
})