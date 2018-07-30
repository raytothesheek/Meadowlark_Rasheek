var fortuneCookies = [
	"Conquer your fears or they will conquer you. ", 
	"Rivers do not need springs. ", 
	"Do not fear what you do not know. ", 
	"You will have a pleasant surprise. ", 
	"Whenever possible, keep it simple. ", 
];

// If you want something to be visible outside of the module, you have to add it to exports. 
//getFortune will be available from outside this module, but our array fortuneCookies will be completely hidden. 
exports.getFortune = function () {
	var idx = Math.floor(Math.random() * fortuneCookies.length); 
	return fortuneCookies[idx]; 
}