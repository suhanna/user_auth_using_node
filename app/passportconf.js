var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	models = require('./models/model.js');

module.exports = function(app){
	app.use(passport.initialize())
	app.use(passport.session())
	passport.use(new LocalStrategy(
	  function(username, password, done) {
	    models.User.findOne(
	    	{ 
	    		where:{
	    			'username': username
	    		}
	    	}).then(user=>{
		    	if (!user) {
		        	return done(null, false, { message: 'Incorrect username.' });
		        }
		        if(user.password != password){
		        	return done(null, false, {message : 'password is not correct'})
		        }
		        return done(null, user)
	    	}).catch(err=>{
		    	return done(new Error(err))
		    })
	  }
	));

	passport.serializeUser(function(user, done) {
    	done(null, user.id)
  	})

  	passport.deserializeUser(function(id, done) {
	    models.User.findOne({
	      where: {
	        'id': id
	      }
	    }).then(function (user) {
	      if (user == null) {
	        done(new Error('Wrong user id.'))
	      }
	      
	      done(null, user)
	    })
  	})
}
