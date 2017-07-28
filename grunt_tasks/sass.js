/*
SASS Grunt tasks
 */

 module.exports = function(grunt, config) {
 	grunt.config.merge({
 		sass: {
 			dist: {
 			src: config.scssDir + 'style.scss',
 			dest: config.cssDir + 'style.css'
 			}
 		},
 		// csslint: {
 		// 	strict: {
 		// 		options: {
 		// 			important: 1
 		// 		},
 		// 		src: config.scssDir + 'style.scss'
 		// 	}
 		// },
 		watch: {
 			sass: {
 				files: config.scssDir + "**/*.scss",
 			  tasks: [
 			  	"sass"
 			  ]
 			}
 		}
 	});
 };