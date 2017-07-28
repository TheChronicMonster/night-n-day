/* 
JavaScript Grunt tasks
 */

module.exports = function(grunt, config) {
	grunt.config.merge({
		concat: {
			dist: {
				src: config.jsSrcDir + '*.js',
				dest: config.jsConcatDir + 'scripts.js'
			},
		},
		jshint: {
			options: {
				"eqeqeq": true,
			},
			all: [
				'Gruntfile.js',
				config.jsSrcDir + "*.js"
			]
		},
		uglify: {
      		// options: {
        // 		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      		// },
      		build: {
        		src: config.jsConcatDir + 'scripts.js',
        		dest: config.jsMinDir + 'scripts.min.js'
      		}
    	},
		watch: {
			js: {
				files: "<%= concat.dist.src %>",
				tasks: [
					"jshint",
					"concat"
				]
			}
		}
	});
};