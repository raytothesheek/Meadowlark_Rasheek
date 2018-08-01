module.exports = function(grunt){
	//Loading plugins 
	[
		'grunt-cafe-mocha', 
		'grunt-contrib-jshint', 
		'grunt-exec',
	].forEach(funtion(task){
		grunt.loadNpmTasks(task); 
		}); 

	//configuring plugins 
	grunt.initConfig({
		cafemocha: {
			all: {src: 'qa/tests-*.js', options: {ui: 'tdd'}, } 
		}, 
		jshint: {
			app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*..js'], 
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
		}, 
		exec: {
			linkchecker: 
					{cmd: 'linkchecker http://localhost:3000'}
		},
	}); 
}