//create a test and see whether a link has been created yet 
suite('"About" Page Tests', function(){
	test('page should contain link to contact page', function() {
		assert($('a[href="/contact"]').length); 
	}); 
});