var Browser = require('zombie'); 
assert = require('chai').assert; 
var browser; 

/* 
zombie version is bugged
*/

/*
Mocha is able to handle synchronous and asynch tests. when you run a sych test, you can 
just pass it as an anon function. 
If you are running an asynch test, you have to tell Mocha that the test is async. you do this 
by passing a parameter into the function. you must call it to indicate the test is over. 
*/
suite('Cross-page Tests', function(){
	setup(function(){
		browser = new Browser(); 
	}); 
	test('requesting a group rate quote from the hood river tour page' + 
		'should populate the referrer field', function(done){
			var referrer = 'http://localhost:3000/tours/hood-river'; 
			browser.visit(referrer, function(){
				browser.clickLink('.requestGroupRate', function(){
					assert(browser.field('referrer').value === ' '); 
					done();
				});
		});
	});

	test('requesting a group rate quote	from the Oregon Coast tour page should' +
		'populate the referrer field', function(done){
			var referrer = 'http://localhost:3000/tours/oregon-coast';
			browser.visit(referrer, function(){
				browser.clickLink('.requestGroupRate', function(){
					assert(browser.field('referrer').value === ' '); 
					done(); 
				});
			});
		}); 
	test('visting the "request group rate" page directly should' + 
		'in an empty referrer field', function(done){
			browser.visit('http://localhost:3000/tours/request-group-rate', function(){
				browser.clickLink('.requestGroupRate', function(){
					assert(browser.field('referrer').value === '');
					done(); 					
				}); 
			});
		});
}); 