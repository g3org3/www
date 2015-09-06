

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
		},
		shell: {
			options: {

			},
			dist: {
				command: [
					"mkdir dist",
					"mkdir dist/css",
					"mkdir dist/img",
					"mkdir dist/js",
					"mkdir dist/pdfs",
					"mkdir dist/fonts",
					"mkdir dist/font-awesome",
					"jade -o dist/ views/*.jade --pretty",
					"rm dist/layout.html",
					"cp -R css dist",
					"stylus -u nib -c -o dist/css/ styls/*.styl",
					"cp -R img dist",
					"cp -R js dist",
					"cp -R pdfs dist",
					"cp -R fonts dist",
					"cp -R font-awesome dist",
					"cp server/* dist"
				].join("&&")
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
		'shell:dist', 'shell:zip'
	]);

	grunt.registerTask('clean', ['shell:clean']);
}


