
//Figure out whats wrong with the debug 
//EXPRESS SETUP
//------------------------------
//creating an express variable
var express = require('express'); 
//Specifying imports at the top of the page 
var fortune = require('./lib/fortune.js');
//app using the express framework 
var app= express();

//------------------------------


//HANDLEBARS SETUP
//------------------------------
//Handlebars is basically a default layout. Easy to modify stuff 
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine); 
app.set('views', __dirname+'/views/layouts');
//print out the console log. 
console.log(__dirname+'/views/layouts')
app.set('view engine', 'handlebars'); 
//------------------------------


//Setup Morgan middleware to log 
app.use(require('morgan')('dev'));

//Express relies on middlware to handle static files and views. 
//The static middleare allows you to designate one or more directories as containing static resources 
// We use a public directory because anything in the public folder will be served to the client without question 
//before we declare any routes 
app.use(express.static(__dirname + '/public')); 

//access port on localhost:3000 
app.set('port', process.env.PORT || 3000); 

//middleware to detect test=1 in the querystring. it must appear before routes are defined
//basically this code says that if we are not running on a production server and if querystring = (test=1)
app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'; 
	next(); 
})

app.get('/tours/hood-river', function(req, res){
	res.render('tours/hood-river'); 
}); 

app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate'); 
}); 

app.get('/', function(req, res){
	res.render('home'); 
}); 

app.get('/about', function(req, res) { 
	res.render('about', {
		fortune: fortune.getFortune(), 
		pageTestScript: '/qa/tests-about.js'
	}); 
});


//404 catch all handler (middleware)
app.use(function(req, res, next){
	res.status(404); 
	res.render('404'); 
}); 


// 500 error handler (middleware)
app.use(function(req, res){
	console.error(err.stack); 
	res.status(500); 
	res.render('500'); 
});  

app.listen(app.get('port'), function(req, res){
	console.log('Express started on http://localhost:' + app.get('port') + '; press ctrl-c to terminate'); 
}); 


