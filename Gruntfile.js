

module.exports = function(grunt){

	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9000
				}
			}
		},

		watch: {
			files: [
				'*.html',
				'js/*.js',
				'css/*.css',
				'views/*',
				'styls/*'
			],
			options: {
				livereload: true
			}
		},
		open : {
			dev : {
				path: 'http://127.0.0.1:9000/',
				app: 'Google Chrome'
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', [
		'connect', 'open', 'watch'
	])
}