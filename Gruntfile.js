

module.exports = function(grunt){

	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9000,
					base: 'dist'
				}
			}
		},

		watch: {
			files: [
				'*.html',
				'static/js/*.js',
				'static/css/*.css',
				'views/*',
				'styls/*'
			],
			options: {
				livereload: true
			},
			tasks: ['shell:render']
		},
		open : {
			dev : {
				path: 'http://127.0.0.1:9000/',
				app: 'Google Chrome'
			}
		},
		shell: {
			options: {

			},
			dist: {
				command: [
					"mkdir dist",
					"cp -R static/* dist",
					"cp server/* dist"
				].join("&&")
			},
			render: {
				command: [
					"jade -o dist/ views/*.jade --pretty",
					"rm dist/layout.html",
					"stylus -u nib -c -o dist/css/ styls/*.styl"
				].join('&&')
			},
			zip: {
				command: "zip -r www.zip dist"
			},
			clean: {
				command: "rm -fr dist; rm *.zip"
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', [
		'connect', 'open', 'watch'
	]);

	grunt.registerTask('dist', [
		'shell:dist', 'shell:render', 'shell:zip'
	]);

	grunt.registerTask('clean', ['shell:clean']);
}


