suite('Global Tests', function(){
	test('page has a valid title', function(){
		console.log('we entered the global tests function'); 
		assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
	});
});
