const express = require('express'),
      app = express(),
 	  port = 8000,
	  session = require('express-session'),
	  flash = require('connect-flash'),
	  bodyParser = require("body-parser"),
	  setupHbs = require('./app/handlebarsconf.js')(app),
	  appRouter = require('./app/routecontroller.js'),
	  setupPassport = require('./app/passportconf.js');
	  

app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

setupPassport(app)

appRouter(app)

// app.use(function(err, req, res, next) {
//     	res.status(404).send(err.message)
// 	});

app.listen(port,()=>{
	console.log(`my application is running at port : ${port}`)
})