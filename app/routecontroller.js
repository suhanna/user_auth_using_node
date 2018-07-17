var passport = require('passport'),
	models = require('./models/model.js');

module.exports = function(app){    
    function isAuthenticated(req, res, next){
    	if(req.isAuthenticated()){
    		return next()
    	}
    	req.flash('error','have to login first')
    	res.redirect('/')
    }

	app.get('/', (req, res)=>{
		res.render('home')
	})
	
	app.post('/login', passport.authenticate('local',{
		successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true  
	}))

	app.get('/login',(req, res, next)=>{
		res.render('home')
	})

	app.get('/dashboard', isAuthenticated, (req, res)=>{
		res.render('dashboardview')
	})

	app.get('/logout',(req, res, next)=>{
		req.logout()
		res.redirect('/')
	})

	app.get('/signup', (req, res)=>{
		res.render('signup')
	})

	app.post('/signup', (req, res)=>{
		var username = req.body.username,
			password = req.body.password,
			password1 = req.body.password1;

		if(!username || !password || !password1){
			req.flash('error','Three values are mandatory')
			res.redirect('/signup')
		}

		if(password != password1){
			req.flash('error', 'password mismatch')
			res.redirect('/signup')
		}

		models.User.create({
			username:username,
			password:password
		}).then(()=>{
			res.redirect('/')
		}).catch(err=>{
			req.flash('error', 'Username already exist. Choose another one')
			res.redirect('/signup')
		})
	})

}