var fortunes  = [
	"Conquer your fears or they will conquer you. ", 
	"Rivers need springs. ", 
	"Do not fear what you don't know", 
	"You will have a pleasant surprise. ", 
	"Whenever possible, keep it simple"
]; 


//EXPRESS SETUP
//------------------------------
//creating an express variable
var express = require('express'); 
//app using the express framework 
var app= express(); 
//------------------------------


//HANDLEBARS SETUP
//------------------------------
//Handlebars is basically a default layout. Easy to modify stuff 
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine); 
app.set('views', __dirname+'/views/layouts');
app.set('view engine', 'handlebars'); 
//------------------------------


//Express relies on middlware to handle static files and views. 
//The static middleare allows you to designate one or more directories as containing static resources 
// We use a public directory because anything in the public folder will be served to the client without question 
//before we declare any routes 
app.use(express.static(__dirname + '/public')); 

//access port on localhost:3000 
app.set('port', process.env.PORT || 3000); 

app.get('/', function(req, res){
	res.render('home'); 
}); 

app.get('/about', function(req, res) {
	//get a random value 
	var randomFortune = fortunes[Math.floor(Math.random()* fortunes.length)];
	//check out debug 
	console.log(randomFortune);  
	res.render('about'); 
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


